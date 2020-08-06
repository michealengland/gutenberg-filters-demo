/**
 * WordPress dependencies
 */
import { BlockControls } from '@wordpress/block-editor';
import { KeyboardShortcuts, Popover, Toolbar, ToolbarButton } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import { useMemo, useState } from '@wordpress/element';
import { displayShortcut, rawShortcut } from '@wordpress/keycodes';
import { registerFormatType, toggleFormat } from '@wordpress/rich-text';

/**
 * External dependencies
 */
import { uniqueId } from 'lodash';

const MyToolbar = withState( {
	addingLink: false,
	isVisible: false,
	isFormatSelected: false,
} )( ( props ) => {
	const {
		addingLink,
		isActive,
		isFormatSelected,
		isVisible,
		setState,
	} = props;

	// set IsVisble upon field click.
	if ( isVisible !== true ) {
		setState( { isVisible: true } );
	}

	// isActive will only trigger if format type matches 'gfd/text-tagging'
	if ( isVisible && isActive && isFormatSelected === false ) {
		setState( { isFormatSelected: true } );
	}

	// Apply new format to text.
	const onButtonClick = () => {
		props.onChange( toggleFormat(
			props.value,
			{
				type: 'gfd/text-tagging',
				attributes: {
					url,
				},
			}
		) );
	};

	// Functionality for determining if Popover should be open.
	const [ isURLPickerOpen, setIsURLPickerOpen ] = useState( false );
	const url = 'https://google.com';
	const urlIsSet = !! url;
	const urlIsSetandSelected = urlIsSet && isActive;

	// Activate Popover.
	const openTickerControl = () => {
		setIsURLPickerOpen( true );
		setAttributes( {
			url,
			linkTarget: undefined,
			rel: undefined,
		} );

		return false; // prevents default behaviour for event
	};

	const mountingKey = useMemo( uniqueId, [ addingLink ] );

	/**
	 * Gets the position of the text location.
	 */
	const anchorRef = useMemo( () => {
		const selection = window.getSelection();

		if ( ! selection.rangeCount ) {
			return;
		}

		const range = selection.getRangeAt( 0 );

		if ( addingLink && ! isActive ) {
			return range;
		}

		let element = range.startContainer;

		// If the caret is right before the element, select the next element.
		element = element.nextElementSibling || element;

		while ( element.nodeType !== window.Node.ELEMENT_NODE ) {
			element = element.parentNode;
		}

		return element.closest( 'a' );
	}, [ addingLink, props.value.start, props.value.end ] );

	/**
	 * 5.3.4 Fix
	 *
	 * Using the anchorRef prop does not work in 5.3.4. Use
	 * anchorRef to get the bounding rectangle object on the
	 * anchorRect prop instead.
	 */
	const anchorRefRect = anchorRef ? anchorRef.getBoundingClientRect() : '';

	// Remove text format.
	const removeTextFormat = () => {
		props.onChange( toggleFormat(
			props.value,
			{
				type: 'gfd/text-tagging',
				attributes: {
					url,
				},
			}
		) );

		setIsURLPickerOpen( false );

		setState( { isFormatSelected: false } );
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
			{ ( isVisible || isActive ) && (
				<KeyboardShortcuts
					bindGlobal
					shortcuts={ {
						[ rawShortcut.primary( ';' ) ]: openTickerControl,
						[ rawShortcut.primaryShift( ';' ) ]: removeTextFormat,
					} }
				/>
			) }
			{ ( isURLPickerOpen || urlIsSetandSelected ) && (
				<Popover
					key={ mountingKey }
					anchorRect={ anchorRefRect }
					focusOnMount={ addingLink ? 'firstElement' : false }
					position="bottom center"
					onClose={ () => setIsURLPickerOpen( false ) }
				>

				</Popover>
			) }
		</>
	);
} );

// This controls the markup added to the text content.
registerFormatType(
	'gfd/text-tagging', {
		title: 'Tag',
		tagName: 'a',
		attributes: {
			url: 'href',
		},
		className: null,
		edit: MyToolbar,
	}
);
