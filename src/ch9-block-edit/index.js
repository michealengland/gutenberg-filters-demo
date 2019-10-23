/**
 * Used to modify the block’s edit component. It receives the original block BlockEdit component and returns a new wrapped component.
 *
 * @link https://developer.wordpress.org/block-editor/developers/filters/block-filters/#editor-blockedit
 * @note This demo is based on modified version of Zac Gordons Advanced Gutenberg course.
 */
const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const {
	PanelBody,
	ToggleControl,
} = wp.components;
const { __ } = window.wp.i18n;

function addBooleanAttribute( settings, name ) {
	if ( 'core/code' !== name ) {
		return settings;
	}

	settings.attributes.exampleToggle = {
		type: 'boolean',
		default: false,
	};

	return settings;
}

const withInspectorControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const toggledClassName = props.attributes.exampleToggle ? 'expecto-patronum' : '';

		return (
			<Fragment>
				<div className={ toggledClassName } >
					<BlockEdit { ...props } />
				</div>
				<InspectorControls>
					<PanelBody
						title={ __( 'You\'re a Wizard, Harry.' ) }
					>
						<ToggleControl
							label={ __( 'Expecto Patronum?' ) }
							checked={ props.attributes.exampleToggle }
							onChange={ ( exampleToggle ) => props.setAttributes( { exampleToggle } ) }
						/>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	};
}, 'withInspectorControl' );

// Returns a class name to the saved element.
function modifySavedElement( el, block, attributes ) {
	if ( 'core/code' === block.name && attributes.exampleToggle ) {
		// console.log( el );
		// console.log( block );
		// console.log( attributes );

		// Assign class name.
		el.props.className = attributes.exampleToggle ? 'expecto-patronum' : '';
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
