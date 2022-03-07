<?php
/**
 * Plugin Name:       Starting block
 * Description:       Starting point for (single) block server side rendered blocks
 * Requires at least: 5.7
 * Requires PHP:      7.3
 * Version:           0.1.0
 * Author:            bobbingwide
 * License:           GPLv3
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       sb-starting-block
 *
 * @package           sb-starting-block
 */

/**
 * Registers the blocks using the metadata loaded from their `block.json` files.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function oik_sb_sb_starting_block_block_init() {
	load_plugin_textdomain( 'sb-starting-block', false, 'sb-starting-block/languages' );
	$args = [ 'render_callback' => 'oik_sb_sb_starting_block_dynamic_block'];
	$registered = register_block_type_from_metadata( __DIR__ . '/src/starting-block', $args );
	//bw_trace2( $registered, "registered");
	//print_r( $registered);
	$registered = register_block_type_from_metadata( __DIR__ . '/src/second-block' );
	//print_r( $registered);
	//bw_trace2( $registered, "registered");

	/**
	 * Localise the script by loading the required strings for the build/entry-point.js file
	 * from the locale specific .json file in the languages folder.
	 *
	 * The script handle for oik-sb/sb-starting-block is oik-sb-sb-starting-block-editor-script
	 * For oik-sb/second-block it's oik-sb-second-block-editor-script
	 *
	 * The filter function can be registered either before or after the wp_set_script_translations calls.
	 *
	 * The load_script_textdomain_relative_path filter gets called for every script that's been enqueued
	 * but we need to call wp_set_script_translations for each block's editor script in order to tell it which folder
	 * to look in.
	 */
	$ok=wp_set_script_translations( 'oik-sb-sb-starting-block-editor-script', 'sb-starting-block', __DIR__ . '/languages' );
	$ok=wp_set_script_translations( 'oik-sb-second-block-editor-script', 'sb-starting-block', __DIR__ . '/languages' );

	//bw_trace2( $ok, "OK?", false );
	//	$wp_scripts=wp_scripts();
	//print_r( $wp_scripts );

	add_filter( 'load_script_textdomain_relative_path', 'oik_sb_sb_starting_block_load_script_textdomain_relative_path', 10, 2 );
}

/**
 * Filters $relative so that md5's match what's expected.
 *
 * Depending on how it was built the `build/entry-point.js` may be preceded by `./` or `src/block-name/../../`.
 * In either of these situations we want the $relative value to be returned as `build/entry-point.js`.
 * This then produces the correct md5 value and the .json file is found.
 *
 * @param $relative
 * @param $src
 *
 * @return mixed
 */
function oik_sb_sb_starting_block_load_script_textdomain_relative_path( $relative, $src ) {
	//bw_trace2();
	if ( false !== strpos( $src, '/sb-starting-block/src/' )) {
		$relative = 'build/' . basename( $relative );
	}
	//bw_trace2( $relative, "relative", false);
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
	/* translators: %s: time in user's preferred format */
	$content = sprintf( __( 'Starting block rendered at %s on %s', 'sb-starting-block'), $localised_time, date( 'Y/m/d') );
	$html = sprintf( '<div %1$s>%2$s</div>', $wrapper_attributes, $content );
	return $html;
}

oik_sb_sb_starting_block_loaded();
