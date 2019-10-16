<?php
/**
 * Insert page scaffolding block template.
 *
 * @author Mike England <micheallengland@gmail.com>
 * @link https://developer.wordpress.org/block-editor/developers/block-api/block-templates/
 */
function gfd_setup_page_template() {

	// Get page post type object.
	$post_type_object = get_post_type_object( 'page' );

	// Assign blocks to page.
	$post_type_object->template = array(
		array( 'gfd/scaffolding' ),
	);

	// Force template in content area.
	$post_type_object->template_lock = 'all';
}
add_action( 'init', 'gfd_setup_page_template' );