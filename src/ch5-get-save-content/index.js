/**
 * A filter that applies to all blocks returning a WP Element in the save function.
 *
 * @param {*} props
 */

function addBackgroundColorStyle( props, settings ) {
	if ( 'core/paragraph' !== settings.name ) {
		return;
	}

	// console.log( props );
	// console.log( settings );

	return lodash.assign( props, { style: { backgroundColor: 'red' } } );
}

wp.hooks.addFilter(
	'blocks.getSaveContent.extraProps',
	'gfd/add-background-color-style',
	addBackgroundColorStyle
);
