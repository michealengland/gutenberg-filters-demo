/**
 * A filter that applies to all blocks returning a WP Element in the save function.
 *
 * @param object props
 * @param object settings
 * @link https://developer.wordpress.org/block-editor/developers/filters/block-filters/#blocks-getsavecontent-extraprops
 */

function addBackgroundColorStyle( props, settings ) {
	if ( 'core/list' !== settings.name ) {
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
