<?php
/**
 * Plugin Name:       Starting block
 * Description:       Starting point for a single block server side rendered block
 * Requires at least: 5.7
 * Requires PHP:      7.3
 * Version:           0.0.1
 * Author:            bobbingwide
 * License:           GPLv3
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       sb-starting-block
 *
 * @package           sb-starting-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function oik_sb_sb_starting_block_block_init() {
	load_plugin_textdomain( 'sb-starting-block', false, 'sb-starting-block/languages' );
	$args = [ 'render_callback' => 'oik_sb_sb_starting_block_dynamic_block'];
	register_block_type_from_metadata( __DIR__ . '/src/starting-block', $args );

	/**
	 * Localise the script by loading the required strings for the build/index.js file
	 * from the locale specific .json file in the languages folder.
	 * oik-sb/sb-starting-block
	 */
	$ok = wp_set_script_translations( 'oik-sb-sb-starting-block-editor-script', 'sb-starting-block' , __DIR__ .'/languages' );
	//bw_trace2( $ok, "OK?");
	add_filter( 'load_script_textdomain_relative_path', 'oik_sb_sb_starting_block_load_script_textdomain_relative_path', 10, 2);

}

/**
 * Filters $relative so that md5's match what's expected.
 *
 * Depending on how it was built the `build/index.js` may be preceded by `./` or `src/block-name/../../`.
 * In either of these situations we want the $relative value to be returned as `build/index.js`.
 * This then produces the correct md5 value and the .json file is found.
 *
 * @param $relative
 * @param $src
 *
 * @return mixed
 */
function oik_sb_sb_starting_block_load_script_textdomain_relative_path( $relative, $src ) {
	if ( false !== strrpos( $relative, './build/index.js' )) {
		$relative = 'build/index.js';
	}
	//bw_trace2( $relative, "relative");
	return $relative;
}

function oik_sb_sb_starting_block_loaded() {
	add_action( 'init', 'oik_sb_sb_starting_block_block_init' );
}
/**
 * Implements Starting block.
 *
 * @param $attributes
 * @param $content
 * @param $tag
 *
 * @return string
 */
function oik_sb_sb_starting_block_dynamic_block( $attributes ) {
	$classes = '';
	if ( isset( $attributes['textAlign'] ) ) {
		$classes .= 'has-text-align-' . $attributes['textAlign'];
	}
	$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => $classes ) );
	$localised_time = date_i18n( get_option( 'time_format'));
	$content = sprintf( __( 'Starting block rendered at %s', 'sb-starting-block'), $localised_time );
	$html = sprintf( '<div %1$s>%2$s</div>', $wrapper_attributes, $content );
	return $html;
}

oik_sb_sb_starting_block_loaded();
