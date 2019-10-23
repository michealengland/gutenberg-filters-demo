<?php
/**
 * Filter the list of blocks shown in the inserter.
 *
 * @param [type] $allowed_block_types
 * @param [type] $post
 * @return Array
 * @link https://developer.wordpress.org/block-editor/developers/filters/block-filters/#hiding-blocks-from-the-inserter
 */
function my_plugin_allowed_block_types( $allowed_block_types, $post ) {
	// Select post type that this applies to.
	if ( $post->post_type !== 'page' ) {
		return $allowed_block_types;
	}

	// List of allowed blocks.
	return array(
		'core/heading',
		'core/paragraph',
		'core/image',
	);
}
// add_filter( 'allowed_block_types', 'my_plugin_allowed_block_types', 10, 2 );
