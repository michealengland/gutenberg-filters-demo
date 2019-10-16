<?php
/**
 * Enqueue block editor only JavaScript and Editor CSS
 *
 * @author Mike England <mike.england@webdevstudios.com>
 */
function gfd_blocks_editor_scripts() {

	// Enqueue editor JS.
	wp_enqueue_script(
		'gfd-blocks-js',
		plugins_url( '../build/index.js', __FILE__ ),
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ],
		filemtime( plugin_dir_path( __FILE__ ) . $blockPath )
	);

	// Enqueue editor.css.
	wp_enqueue_style(
		'gfd-editor-styles',
		plugins_url( '../assets/editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . '../assets/editor.css' )
	);
}
add_action( 'enqueue_block_editor_assets', 'gfd_blocks_editor_scripts' );

/**
 * Enqueue Frontend Styles
 *
 * @author Mike England <mike.england@webdevstudios.com>
 *
 */
function gfd_register_block_styles() {

	// Enqueue style.css.
	wp_enqueue_style(
		'gfd-styles',
		plugins_url( '../assets/style.css', __FILE__ ),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . '../assets/style.css' )
	);
}
add_action( 'init', 'gfd_register_block_styles' );