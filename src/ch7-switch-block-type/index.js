/**
 * Filters an individual transform result from block transformation.
 * All of the original blocks are passed, since transformations are
 * many-to-many, not one-to-one.
 *
 * @param {Object}   transformedBlock The transformed block.
 * @param {Object[]} blocks           Original blocks transformed.
 * @link https://developer.wordpress.org/block-editor/developers/filters/block-filters/#blocks-switchtoblocktype-transformedblock
 * @source https://github.com/WordPress/gutenberg/blob/5051d6a6890b3b39c6ae4b9fc700e99941cd9033/packages/blocks/src/api/factory.js#L446-L463
 */

function blockTransformFilter( transformedBlock, blocks ) {
	console.log( transformedBlock );
	console.log( blocks );

	return transformedBlock;
}

wp.hooks.addFilter(
	'blocks.switchToBlockType.transformedBlock',
	'core/blockquote',
	blockTransformFilter
);
