<?php
/**
 * Plugin Name:       Post Edit block
 * Description:       Post edit block to allow direct editing of the post
 * Requires at least: 5.7
 * Requires PHP:      7.3
 * Version:           0.0.0
 * Author:            bobbingwide
 * License:           GPLv3
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       sb-post-edit-block
 *
 * @package           sb-post-edit-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function oik_sb_sb_post_edit_block_block_init() {
	$args = [ 'render_callback' => 'oik_sb_sb_post_edit_block_dynamic_block'];
	register_block_type_from_metadata( __DIR__, $args );
}

function oik_sb_sb_post_edit_block_loaded() {
	add_action( 'init', 'oik_sb_sb_post_edit_block_block_init' );
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
function oik_sb_sb_post_edit_block_dynamic_block( $attributes ) {
	$link='';
	$url =get_edit_post_link();
	if ( $url ) {
		$class='bw_edit';
		$text =__( '(Edit)', 'sb-post-edit-block' );
		$link ='<a class="' . esc_attr( $class ) . '" href="' . esc_url( $url ) . '">' . $text . '</a>';
	}
	return $link;
}

oik_sb_sb_post_edit_block_loaded();
