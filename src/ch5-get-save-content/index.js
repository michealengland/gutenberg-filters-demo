/**
 * A filter that applies to all blocks returning a WP Element in the save function.
 *
 * @param {*} props
 */
function addBackgroundColorStyle( props, settings ) {

	console.log( settings.name );

	if ( 'core/paragraph' !== settings.name ) {
		return;
	}

	return lodash.assign( props, { style: { backgroundColor: 'red' } } );
}

wp.hooks.addFilter(
	'blocks.getSaveContent.extraProps',
	'gfd/add-background-color-style',
	addBackgroundColorStyle
);
