/**
 * Filter the class names of a block.
 *
 * @param {*} className
 * @param {*} blockName
 * @link https://developer.wordpress.org/block-editor/developers/filters/block-filters/#blocks-getblockdefaultclassname
 */

// Our filter function
function setBlockCustomClassName( className, blockName ) {
	// console.log( className );
	// console.log( blockName );

	return blockName === 'core/code' ? 'block-custom-class' : className;
}

// Adding the filter.
wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	'core/code',
	setBlockCustomClassName
);
