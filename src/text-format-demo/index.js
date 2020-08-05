/**
 * WordPress dependencies
 */
import { BlockControls } from '@wordpress/block-editor';
import { KeyboardShortcuts, Popover, Toolbar, ToolbarButton } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import { useState } from '@wordpress/element';
import { displayShortcut, rawShortcut } from '@wordpress/keycodes';
import { registerFormatType, toggleFormat } from '@wordpress/rich-text';

const MyToolbar = withState( {
	isVisible: false,
} )( ( props ) => {
	const { isActive } = props;

	// isActive will only trigger if format type matches 'gfd/text-tagging'
	if ( isActive ) {
		// eslint-disable-next-line no-console
		console.log( props.value.activeFormats[ 0 ].type );
	}

	// Apply new format to text.
	const onButtonClick = () => {
		props.onChange( toggleFormat( props.value, { type: 'gfd/text-tagging' } ) );
	};

	// Functionality for determining if Popover should be open.
	const [ isURLPickerOpen, setIsURLPickerOpen ] = useState( false );
	const url = 'https://google.com';
	const urlIsSet = !! url;
	const urlIsSetandSelected = urlIsSet && isActive;

	// Activate Popover.
	const openTickerControl = () => {
		setIsURLPickerOpen( true );
		return false; // prevents default behaviour for event
	};

	// Remove text format.
	const unlineTicker = () => {
		props.onChange( toggleFormat( props.value, { type: 'gfd/text-tagging' } ) );
		setIsURLPickerOpen( false );
		return false; // prevents default behaviour for event
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
						[ rawShortcut.primary( ';' ) ]: openTickerControl,
						[ rawShortcut.primaryShift( ';' ) ]: unlineTicker,
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
