/**
 * Disable all blocks and allow only specific blocks.
 *
 * @link https://developer.wordpress.org/block-editor/developers/filters/block-filters/#using-a-whitelist
 */

// Whitelisted Blocks.
const allowedBlocks = [
	'core/heading',
	'core/paragraph',
	'core/image',
];

// Loop through each block.
wp.blocks.getBlockTypes().forEach( function( blockType ) {
	// console.log( allowedBlocks.indexOf( blockType.name ) );

	// If the block name does not match, deregister it.
	if ( allowedBlocks.indexOf( blockType.name ) === -1 ) {
		wp.blocks.unregisterBlockType( blockType.name );
	}
} );

// my-plugin.js
wp.domReady( function() {
	// Loop through each block.
	wp.blocks.getBlockTypes().forEach( function( blockType ) {
		// If the block name does not match, deregister it.
		if ( allowedBlocks.indexOf( blockType.name ) === -1 ) {
			wp.blocks.unregisterBlockType( blockType.name );
		}
	} );
} );
