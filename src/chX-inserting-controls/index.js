/**
 * Register Toggle Settings.
 *
 * @param {*} settings Object.
 * @param {*} name
 * @return {*} settings Object.
 */
function demoToggleSettings( settings, name ) {
	// Check for specific block.
	if ( 'core/quote' === name ) {
		// Set our toggle to false by default.
		settings.attributes.testToggle = {
			type: 'boolean',
			defualt: false,
		};
	}

	return settings;
}

// wp.hooks.addFilter( 'hook, 'namespace', 'callback' );
wp.hooks.addFilter( 'blocks.registerBlockType', 'wds', demoToggleSettings );

/**
 * This function adds our toggle to the editor.
 */
const el = wp.element.createElement;

const withInspectorControls = wp.compose.createHigherOrderComponent( function( BlockEdit ) {
	return function( props ) {
		// Return without change.
		if ( 'core/list' !== props.name ) {
			return BlockEdit;
		}

		// Output all values in block.
		// console.log( props );
		// Gets toggle value defined in demoToggleSettings().
		const testToggle = props.attributes.testToggle;

		const element = el(
			wp.element.Fragment,
			{},
			el( BlockEdit, props ),
			el(
				wp.editor.InspectorControls,
				{},
				el( wp.components.ToggleControl,
					{
						label: 'This toggle is inserted with a filter.',
						checked: testToggle,
						onChange: function() {
							props.setAttributes(
								{ testToggle: ! testToggle }
							);
						},
					}
				)
			)
		);

		return element;
	};
}, 'withInspectorControls' );

wp.hooks.addFilter( 'editor.BlockEdit', 'my-plugin/with-inspector-controls', withInspectorControls );
