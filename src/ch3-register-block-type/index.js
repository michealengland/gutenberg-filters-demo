/**
 * Adds a class to the core/list block called wp-block-list.
 *
 * @param settings Object = registered block settings.
 * @param name = 'block name'
 * @return Object
 *
 * @link https://developer.wordpress.org/block-editor/developers/filters/block-filters/#blocks-registerblocktype
 */

const { __ } = window.wp.i18n;

function addListBlockClassName( settings, name ) {
	// returns if block is not in the editor.
	if ( name !== 'core/list' ) {
		return settings;
	}

	// How to view block properties.
	// console.log( settings );

	// Enableds the a default class name for this block.
	// eslint-disable-next-line no-undef
	return lodash.assign(
		{},
		settings, {
			keywords: [
				__( 'Scruffy Nerf Herder' ),
			],
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
