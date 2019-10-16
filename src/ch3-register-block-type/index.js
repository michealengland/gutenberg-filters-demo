/**
 * Adds a class to the core/list block called wp-block-list.
 *
 * @param settings Object = registered block settings.
 * @param name = 'block name'
 * @return Object
 *
 * @link https://developer.wordpress.org/block-editor/developers/filters/block-filters/#blocks-registerblocktype
 */
function addListBlockClassName( settings, name ) {
	// returns if block is not in the editor.
	if ( name !== 'core/list' ) {
		return settings;
	}

	// Enableds the a default class name for this block.
	// eslint-disable-next-line no-undef
	return lodash.assign(
		{},
		settings, {
			// eslint-disable-next-line no-undef
			supports: lodash.assign( {}, settings.supports, {
				className: true,
			} ),
		}
	);
}

// Client side filter registration.
wp.hooks.addFilter(
	'blocks.registerBlockType',
	'gfd/class-names/list-block',
	addListBlockClassName
);
