<?php
/**
 * Filter the list of default block categories.
 *
 * @link https://developer.wordpress.org/block-editor/developers/filters/block-filters/#managing-block-categories
 */
function my_plugin_block_categories( $categories, $post ) {
	if ( $post->post_type !== 'page' ) {
		return $categories;
	}
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'ch-14-category',
				'title' => __( 'Ch. 14 Category', 'gfd' ),
				'icon'  => 'smiley',
			),
		)
	);
}
add_filter( 'block_categories', 'my_plugin_block_categories', 10, 2 );