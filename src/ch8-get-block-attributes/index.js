/**
 * Returns the block attributes of a registered block node given its type.
 *
 * @param {string|Object} blockTypeOrName Block type or name.
 * @param {string}        innerHTML       Raw block content.
 * @param {?Object}       attributes      Known block attributes (from delimiters).
 *
 * @return {Object} All block attributes.
 *
 * @link   https://developer.wordpress.org/block-editor/developers/filters/block-filters/#blocks-getblockattributes
 * @source https://github.com/WordPress/gutenberg/blob/5051d6a6890b3b39c6ae4b9fc700e99941cd9033/packages/blocks/src/api/parser.js#L270-L292
 */

function blockTransformFilter( attributes, blockTypeOrName, innerHTML ) {
	if ( ! blockTypeOrName.name === 'core/image' ) {
		return;
	}

	console.log( attributes );
	console.log( blockTypeOrName );
	console.log( innerHTML );

	// return blockTypeOrName;
	const dobermanPuppiesImage = 'https://gutenbergfilters.test/wp-content/uploads/2019/10/eyes-hurt-from-the-cuteness.jpeg';

	// Assign new values to attributes.
	attributes.url = dobermanPuppiesImage;
	attributes.caption = 'So cuteeeeeeeee.';

	return attributes;
}

wp.hooks.addFilter(
	'blocks.getBlockAttributes',
	'core/image',
	blockTransformFilter
);
