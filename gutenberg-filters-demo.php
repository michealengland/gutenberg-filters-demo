<?php
/**
 * Plugin Name: Gutenberg Filters Demo
 * Plugin URI:  https://github.com/michealengland/gutenberg-filters-demo
 * Description: Simple ways to extend Gutenberg.
 * Version:     0.0.1
 * Author:      Mike England
 * Author URI:  https://michealengland.com/
 * License:     GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: gfd
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

// Enqueue files for the editor and front-end.
include_once( plugin_dir_path( __FILE__ ) . '/inc/enqueue-scripts.php' );

// Generate scaffolding page.
include_once( plugin_dir_path( __FILE__ ) . '/inc/generate-scaffold.php' );

// Setup blocks on page.
include_once( plugin_dir_path( __FILE__ ) . '/inc/template.php' );

// Import Ch2. SSR style demo.
include_once( plugin_dir_path( __FILE__ ) . '/src/ch2-server-side-renders/ch2-filters.php' );

// Import Ch13. SSR block white list.
include_once( plugin_dir_path( __FILE__ ) . '/src/ch13-hide-blocks-from-inserter/ch13-filters.php' );

// Import Ch14. SSR category filter.
include_once( plugin_dir_path( __FILE__ ) . '/src/ch14-block-categories/ch14-managing-block-cats.php' );

/**
 * Delete generated pages when plugin is deactivated.
 *
 * @author Mike England <mike.england@webdevstudios.com>
 */
function deactivate_plugin() {

	// Scaffolding page strings.
	$title = 'Gutenberg Filters Demo';
	$slug  = 'gfd-page-unit-scaffolding';

	// Escape function if page not found.
	if( ! post_exists( $title ) ) {
		return;
	}

	// Vars.
	$page = get_page_by_title( $title ); // Get post object.
	$scaffold_page_id = $page->ID; // Get post id.
	$scaffold_page_slug = $page->post_name; // Get post slug.

	// Completely remove page during deactivation.
	if( $scaffold_page_slug === $slug ) {
		wp_delete_post( $scaffold_page_id, true );
	}
}

register_deactivation_hook( __FILE__, 'deactivate_plugin' );