/**
 * Unregister Blocks.
 *
 * Checkout inc/enqueue-scripts.php for an exmaple of how to load this script in a plugin.
 *
 * @link https://developer.wordpress.org/block-editor/developers/filters/block-filters/#using-a-blacklist
 */

// my-plugin.js
wp.domReady( function() {
	wp.blocks.unregisterBlockType( 'core/list' );
	wp.blocks.unregisterBlockType( 'core/gallery' );
	wp.blocks.unregisterBlockType( 'core/quote' );
} );
