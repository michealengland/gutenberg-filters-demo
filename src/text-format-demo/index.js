/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';
import { rawShortcut, displayShortcut } from '@wordpress/keycodes';
import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { BlockControls } from '@wordpress/block-editor';
import { Toolbar, ToolbarButton, Popover, KeyboardShortcuts } from '@wordpress/components';
import { withState } from '@wordpress/compose';

console.log( { KeyboardShortcuts, displayShortcut, rawShortcut } );

const MyToolbar = withState( {
	valueTest: false,
	isVisible: false,
} )( ( props ) => {
	const { isActive, isVisible, setState, setAttributes } = props;

	// const [isSelected, setIsSelected] = useState(false);

	// console.log({props});
	// isActive will only trigger if props.value.activeFormats[ 0 ].type === 'gfd/text-tagging'
	if ( isActive ) {
		console.log(props.value.activeFormats[ 0 ].type);
		// setIsSelected( true );
	}

	const onButtonClick = () => {
		// This controls how the format is applied.
		const newFormat = {
			...props.value, // original formats object.
			end: props.value.end,
		};

		props.onChange( toggleFormat( newFormat, { type: 'gfd/text-tagging' } ) );
	};

	// Functionality for determining if Popover should be open.
	const [ isURLPickerOpen, setIsURLPickerOpen ] = useState( false );
	const url = 'https://google.com';
	const urlIsSet = !! url;
	const urlIsSetandSelected = urlIsSet && isActive;

	const openLinkControl = () => {
		console.log('Open Popover', isURLPickerOpen);
		setIsURLPickerOpen( true );
		return false; // prevents default behaviour for event
	};

	const unlinkButton = () => {
		setAttributes( {
			url: undefined,
			linkTarget: undefined,
			rel: undefined,
		} );

		setIsURLPickerOpen( false );

		console.log( 'Close Popover', isURLPickerOpen );
	};

	return (
		<>
			<BlockControls>
				<Toolbar>
					<ToolbarButton
						title="Insert Ticker"
						icon={ 'chart-line' }
						isActive={ isActive }
						onClick={ onButtonClick }
						shortcut={ displayShortcut.primary( ';' ) }
					/>
				</Toolbar>
			</BlockControls>
			{ isActive && (
				<KeyboardShortcuts
					bindGlobal
					shortcuts={ {
						[ rawShortcut.primary( ';' ) ]: openLinkControl,
						[ rawShortcut.primaryShift( ';' ) ]: unlinkButton,
					} }
				/>
			) }
			{ ( isURLPickerOpen || urlIsSetandSelected ) && (
				<Popover
					position="bottom center"
					onClose={ () => setIsURLPickerOpen( false ) }
				>
					Popover is toggled!
				</Popover>
			) }
		</>
	);
} );

// This controls the markup added to the text content.
registerFormatType(
	'gfd/text-tagging', {
		title: 'Tag',
		tagName: 'samp',
		className: null,
		edit: MyToolbar,
	}
);
