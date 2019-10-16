<?php
/**
 * Insert page scaffolding block template.
 *
 * @author Mike England <micheallengland@gmail.com>
 * @link https://developer.wordpress.org/block-editor/developers/block-api/block-templates/
 */
function gfd_setup_page_template() {

	// Post Type to attach a template to.
	$post_type_object = get_post_type_object( 'post' );

	// Assign blocks to page.
	$post_type_object->template = array(
		array( 'core/heading',
			array(
				'content' => 'Main Heading...', // https://github.com/WordPress/gutenberg/blob/master/packages/block-library/src/heading/index.js#L30
				'level' => '1' // https://github.com/WordPress/gutenberg/blob/master/packages/block-library/src/heading/index.js#L31
			)
		),
		array( 'core/gallery', array(
			'placeholder' => 'Add Description...',
			array(
				'columns' => 3,
			)
		) ),
		array( 'core/paragraph', array(
			'placeholder' => 'Add Description...',
		) ),
		array( 'core/block', array( 'ref' => [34], ) )
	);

	/**
	 * Lock the template from being edited.
	 *
	 * @link Template Lockinghttps://developer.wordpress.org/block-editor/developers/block-api/block-templates/#locking
	 * @param string 'all' or 'insert'.
	 */
	$post_type_object->template_lock = 'all';
}
add_action( 'init', 'gfd_setup_page_template' );