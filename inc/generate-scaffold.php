<?php
/**
 * Insert a page for theme scaffolding.
 *
 * @filesource https://developer.wordpress.org/reference/functions/wp_insert_post/
 * @author Mike England <mike.england@webdevstudios.com>
 */
function gfd_create_scaffolding_page() {

	// Default vars.
	$title = 'Gutenberg Filters Demo';
	$slug  = 'gfd-page-unit-scaffolding';

	// Check for a page with a specific title.
	if( post_exists( $title ) ) {
		return;
	}

	// Post data params.
	$scaffold_page = array(
		'post_title'    => $title,
		'post_name'     => $slug,
		'post_status'   => 'publish',
		'post_type'     => 'page',
		'post_author'   => 1,
	);

	// Insert the post into the database.
	wp_insert_post( $scaffold_page, true );
}
add_action( 'admin_init', 'gfd_create_scaffolding_page' );
