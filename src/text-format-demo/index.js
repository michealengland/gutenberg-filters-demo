/**
 * WordPress dependencies
 */
import { BlockControls } from '@wordpress/block-editor';
import { KeyboardShortcuts, Popover, Toolbar, ToolbarButton } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import { useMemo } from '@wordpress/element';
import { displayShortcut, rawShortcut } from '@wordpress/keycodes';
import { applyFormat, registerFormatType, toggleFormat } from '@wordpress/rich-text';

/**
 * External dependencies
 */
import { uniqueId } from 'lodash';

const MyToolbar = withState( {
	addingLink: false,
	isBlockSelected: false,
	isURLPickerOpen: false,
	urlPrevious: '',
	url: '',
} )( ( props ) => {
	const {
		addingLink, // In the process of adding a link
		isActive, // Format applied and is currently selected
		isURLPickerOpen, // Popover UI visibility
		isBlockSelected, // Block is currently selected
		setState, // WP Core function for updating state object
		url, // ???
	} = props;

	// Enable keyboard shortcuts as soon as block is selected.
	if ( isBlockSelected !== true ) {
		setState( { isBlockSelected: true } );
	}

	if ( isActive && url === '' ) {
		setState( {
			url: props.activeAttributes.url,
		} );
	}

	// Functionality for determining if Popover should be open.
	const urlIsSet = !! url;
	const urlIsSetandSelected = urlIsSet && isActive;

	// Toggle button format.
	const onButtonClick = () => {
		// Remove format if one is already present.
		if ( isActive ) {
			// Toggle format off.
			props.onChange( toggleFormat(
				props.value,
				{
					type: 'gfd/text-tagging',
					attributes: {
						url,
					},
				}
			) );

			setState( {
				addingLink: false,
				isURLPickerOpen: false,
				url: '',
			} );
		} else {
			// Open up Popvover UI.
			openTickerControl();
		}

		return false; // prevents default behaviour for event
	};

	// Open Popover.
	const openTickerControl = () => {
		// Activate addingLink so that the anchorRef
		// will focus the correct container.
		setState( {
			addingLink: true,
			isURLPickerOpen: true,
		} );

		return false; // prevents default behaviour for event
	};

	// Close Popover
	const closeTickerControl = () => {
		setState( {
			url: '',
			addingLink: false,
			isURLPickerOpen: false,
		} );
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

	// On form submit.
	const insertFormat = ( e ) => {
		// Prevent form submission.
		e.preventDefault();

		props.onChange( applyFormat(
			props.value,
			{
				type: 'gfd/text-tagging',
				attributes: {
					url,
				},
			}
		) );
	};

	return (
		<>
			<BlockControls>
				<Toolbar>
					{ ( ! isActive ) && (
						<ToolbarButton
							title="Insert Ticker"
							icon={ 'chart-line' }
							isActive={ isActive }
							onClick={ onButtonClick }
							shortcut={ displayShortcut.primary( ';' ) }
						/>
					) }
					{ ( isActive ) && (
						<ToolbarButton
							title="Remove Ticker"
							icon={ 'chart-line' }
							isActive={ isActive }
							onClick={ onButtonClick }
							shortcut={ displayShortcut.primaryShift( ';' ) }
						/>
					) }
				</Toolbar>
			</BlockControls>
			{ ( isBlockSelected ) && (
				<KeyboardShortcuts
					bindGlobal
					shortcuts={ {
						[ rawShortcut.primary( ';' ) ]: onButtonClick,
						[ rawShortcut.primaryShift( ';' ) ]: onButtonClick,
					} }
				/>
			) }
			{ ( isURLPickerOpen || urlIsSetandSelected ) && (
				<Popover
					key={ mountingKey }
					anchorRect={ anchorRefRect }
					focusOnMount={ addingLink ? 'firstElement' : false }
					position="bottom center"
					onClose={ closeTickerControl }
				>
					<form>
						<label htmlFor="url-example">Update url on anchor tag.</label>
						<input type="url"
							name="url-example"
							defaultValue={ props.activeAttributes.url || '' }
							placeholder="enter url..."
							onChange={ ( e ) => {
								setState( { url: e.target.value } );
							} }
						/>
						<button type="submit" onClick={ insertFormat }>Submit</button>
					</form>
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
		className: 'inline-ticker',
		attributes: {
			url: 'href',
		},
		edit: MyToolbar,
	}
);
