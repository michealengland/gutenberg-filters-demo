/**
 * Based on: Block Style Variations
 *
 * @link https://developer.wordpress.org/block-editor/developers/filters/block-filters/#block-style-variations
 */
// Add a class name to core gallery.
wp.blocks.registerBlockStyle( 'core/gallery', {
	name: 'roundy-round', // string for class name.
	label: 'Roundy Round Borders', // Label displayed in the editor.
	// isDefault: true,
} );

// Add another class name.
wp.blocks.registerBlockStyle( 'core/gallery', {
	name: 'blocky-block', // string for class name.
	label: 'Blocky Block Gallery', // Label displayed in the editor.
} );

// Remove block style.
// wp.blocks.unregisterBlockStyle( 'core/gallery', 'blocky-block' );

// Remove block style once the DOM is fully loaded.
// wp.domReady( function() {
// 	wp.blocks.unregisterBlockStyle( 'core/gallery', 'blocky-block' );
// } );
