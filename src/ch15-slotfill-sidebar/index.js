/**
 * Internal dependencies
 */
import coffeeIcon from './material-coffee';

/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';
import { ColorPicker, SelectControl, TextControl } from '@wordpress/components';
import { withSelect, withDispatch } from '@wordpress/data';

// Setup panel controls.
let PluginMetaFields = ( props ) => {
	return (
		<>
			<TextControl
				value={ props.text_metafield }
				label={ __( 'Text Meta', 'textdomain' ) }
				onChange={ ( value ) => props.onMetaFieldChange( value ) }
			/>
			<ColorPicker
				color={ props.text_metafield }
				label={ __( 'Colour Meta', 'textdomain' ) }
				onChangeComplete={ ( colour ) => props.onMetaFieldChange( colour.hex ) }
			/>
			<SelectControl
				label="Choose an option."
				value={ props.text_metafield }
				options={ [
					{ label: 'Option 1', value: 'ex-1' },
					{ label: 'Option 2', value: 'ex-2' },
					{ label: 'Option 3', value: 'ex-3' },
				] }
				onChange={ ( value ) => props.onMetaFieldChange( value ) }
			/>
		</>
	);
};

// Get metafield data.
PluginMetaFields = withSelect(
	( select ) => {
		return {
			text_metafield: select( 'core/editor' ).getEditedPostAttribute( 'meta' )._myprefix_text_metafield,
		};
	}
)( PluginMetaFields );

// Upon field change dispath new data.
PluginMetaFields = withDispatch(
	( dispatch ) => {
		return {
			onMetaFieldChange: ( value ) => {
				dispatch( 'core/editor' ).editPost( { meta: { _myprefix_text_metafield: value } } );
			},
		};
	}
)( PluginMetaFields );

// Register PluginDocumentSettingPanel.
registerPlugin( 'myprefix-sidebar', {
	icon: coffeeIcon,
	render: () => {
		return (
			<>
				<PluginDocumentSettingPanel
					target="myprefix-sidebar"
					name="article-doc-type"
					title="Article Doc Type"
					className="custom-panel"
				>
					<PluginMetaFields />
					{ __( 'Meta Options', 'textdomain' ) }
				</PluginDocumentSettingPanel>
			</>
		);
	},
} );
