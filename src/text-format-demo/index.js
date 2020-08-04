/**
 * WordPress dependencies
 */
import { registerFormatType, toggleFormat, unregisterFormatType } from '@wordpress/rich-text';
import { BlockControls, RichTextToolbarButton } from '@wordpress/block-editor';
import { Toolbar, ToolbarButton, Popover } from '@wordpress/components';
import { withState } from '@wordpress/compose';

const MyToolbar = withState( {
	activeControl: false,
	isVisible: false,
} )( ( props ) => {
	const { activeControl, setState, isActive } = props;

	const onButtonClick = () => {
		// if ( activeControl ) {
		// 	setState( { activeControl: false } );
		// } else {
		// 	setState( { activeControl: true } );
		// }

		// This controls how the format is applied.
		const newFormat = {
			...props.value, // original formats object.
			end: props.value.end,
		};

		// console.log( 'newFormat', newFormat );
		props.onChange( toggleFormat( newFormat, { type: 'gfd/text-tagging' } ) );
	};

	return (
		<>
			<BlockControls>
				<Toolbar>
					<ToolbarButton
						title="Insert Ticker"
						icon={ 'chart-line' }
						isActive={ isActive }
						// onKeyPress={ (e) => {
						// 	console.log( 'onKeyPress', e.target );
						// } }
						onClick={ onButtonClick }
					/>
				</Toolbar>
			</BlockControls>
			{ isActive && (
				<Popover>
					Popover is toggled!
				</Popover>
			) }
		</>
	);
} );

// import { Button, Popover } from '@wordpress/components';
// import { withState } from '@wordpress/compose';

const MyPopover = withState( {
	isVisible: false,
} )( ( { isVisible, setState } ) => {
	const toggleVisible = () => {
		setState( ( state ) => ( { isVisible: ! state.isVisible } ) );
	};
	return (
		<Button isSecondary onClick={ toggleVisible }>
			Toggle Popover!
			{ isVisible && (
				<Popover>
					Popover is toggled!
				</Popover>
			) }
		</Button>
	);
} );

// const MyCustomButton = ( props ) => {

// 	return (
// 		<>
// 			{ /* <MyKeyboardShortcuts /> */ }
// 			<RichTextToolbarButton
// 				icon="editor-code"
// 				title="Sample output"
// 				onClick={ () => {
// 					// This controls how the format is applied.
// 					console.log( props.value );

// 					const newFormat = {
// 						...props.value, // original formats object.
// 						end: props.value.end,
// 					};

// 					// console.log( 'newFormat', newFormat );

// 					// <URLInputButton
// 					// 	value={ 'test' }
// 					// 	url={ 'test' }
// 					// 	// onChange={ ( url, post ) => setAttributes( { url, text: (post && post.title) || 'Click here' } ) }
// 					// />

// 					props.onChange( toggleFormat( newFormat, { type: 'gfd/text-tagging' } ) );
// 				} }
// 				isActive={ props.isActive }
// 			/>
// 		</>
// 	);
// };

// This controls the markup added to the text content.
registerFormatType(
	'gfd/text-tagging', {
		title: 'Tag',
		tagName: 'samp',
		className: null,
		edit: MyToolbar,
	}
);

// First check for available format types using
// wp.data.select( 'core/rich-text' ).getFormatTypes();
// Then use the following function to deregister it.
// unregisterFormatType( 'core/italic' );
