/**
 * Used to modify the block’s edit component. It receives the original block BlockEdit component and returns a new wrapped component.
 *
 * @link https://developer.wordpress.org/block-editor/developers/filters/block-filters/#editor-blockedit
 * @note This demo is based on modified version of Zac Gordons Advanced Gutenberg course.
 */

const {
	blockEditor: {
		InspectorControls,
	},
	components: {
		PanelBody,
		ToggleControl,
	},
	compose: {
		createHigherOrderComponent,
	},
	element: {
		Fragment,
	},
	i18n: {
		__,
	},
} = wp;

function addBooleanAttribute( settings, name ) {
	if ( 'core/image' !== name ) {
		return settings;
	}

	console.log( 'settings', settings );
	console.log( 'name', name );

	settings.attributes.exifDataToggle = {
		type: 'boolean',
		default: false,
	};

	return settings;
}

const withInspectorControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const {
			attributes: {
				exifDataToggle,
			},
			setAttributes,
		} = props;

		const toggleUpdate = exifDataToggle ? 'expecto-patronum' : '';

		const onToggleChange = ( newValue ) => {
			setAttributes( { exifDataToggle: newValue } );
		};

		return (
			<Fragment>
				<div className={ toggleUpdate } >
					<BlockEdit { ...props } />
				</div>
				<InspectorControls>
					<PanelBody
						title={ __( 'Enable Exif Data' ) }
					>
						<ToggleControl
							label={ __( 'Display exif data from image file.' ) }
							checked={ exifDataToggle }
							onChange={ onToggleChange }
						/>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	};
}, 'withInspectorControl' );

// Returns a class name to the saved element.
function modifySavedElement( el, block, attributes ) {
	if ( 'core/code' === block.name && attributes.exifDataToggle ) {
		// console.log( el );
		// console.log( block );
		// console.log( attributes );

		// Assign class name.
		el.props.className = attributes.exifDataToggle ? 'expecto-patronum' : '';
	}
	return el;
}

// Set new attributes.
wp.hooks.addFilter(
	'blocks.registerBlockType',
	'gfd/add-code-attributes',
	addBooleanAttribute
);

// Insert editor control.
wp.hooks.addFilter(
	'editor.BlockEdit',
	'core/code',
	withInspectorControls
);

// Modify the saved value.
wp.hooks.addFilter(
	'blocks.getSaveElement',
	'gfd/modify-code-save-settings',
	modifySavedElement
);
