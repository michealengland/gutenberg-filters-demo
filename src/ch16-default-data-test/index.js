/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'gfd/default-data', {
	title: __( 'Default Data Block', 'gfd' ),
	description: __( 'Compare attribute data on block load.', 'gfd' ),
	icon: 'shield',
	category: 'common',
	attributes: {
		testAttribute1: {
			type: 'string',
			default: '',
		},
		testAttribute2: {
			type: 'string',
			default: 'default-value',
		},
	},
	edit,
	save,
} );
