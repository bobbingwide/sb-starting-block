<?php
/**
 * Plugin Name:       Starting block
 * Description:       Starting Server Side Rendered block
 * Requires at least: 5.7
 * Requires PHP:      7.3
 * Version:           0.0.0
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
	$args = [ 'render_callback' => 'oik_sb_sb_starting_block_dynamic_block'];
	register_block_type_from_metadata( __DIR__, $args );
}

function oik_sb_sb_starting_block_loaded() {
	add_action( 'init', 'oik_sb_sb_starting_block_block_init' );
}
/**
 * Implements post-edit block.
 *
 * If the user is authorised return a post edit link for the current post.
 *
 * @param $attrs
 * @param $content
 * @param $tag
 *
 * @return string
 */
function oik_sb_sb_starting_block_dynamic_block( $attributes ) {
	// @TODO Need a standard block wrapper here.
	$html = __( 'Starting block.', 'sb-starting-block');
	// 	$html=\oik\oik_blocks\oik_blocks_check_server_func( "shortcodes/starting-block.php", "sb-starting-block", "oik_sb_sb_starting_block" );
	return $html;
}

oik_sb_sb_starting_block_loaded();
