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
	isVisible: false,
	isURLPickerOpen: false,
	url: '',
} )( ( props ) => {
	const {
		addingLink,
		isActive,
		isURLPickerOpen,
		isVisible,
		setState,
		url,
	} = props;

	// Functionality for determining if Popover should be open.
	const urlIsSet = !! url;
	const urlIsSetandSelected = urlIsSet && isActive;

	// set isVisble to true to enable upon field click.
	if ( isVisible !== true && isActive ) {
		setState( {
			isVisible: true,
		} );
	}

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

		// We're no longer adding a link.
		setState( {
			addingLink: false,
			isVisible: false,
			isURLPickerOpen: false,
		} );
	};

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

		setState( {
			isURLPickerOpen: false,
		} );

		return false; // prevents default behaviour for event
	};

	return (
		<>
			<BlockControls>
				<Toolbar>
					{ ! isActive && (
						<ToolbarButton
							title="Insert Ticker"
							icon={ 'chart-line' }
							isActive={ isActive }
							onClick={ openTickerControl }
							shortcut={ displayShortcut.primary( ';' ) }
						/>
					) }
					{ isActive && (
						<ToolbarButton
							title="Insert Ticker"
							icon={ 'chart-line' }
							isActive={ isActive }
							onClick={ openTickerControl }
							shortcut={ displayShortcut.primaryShift( ';' ) }
						/>
					) }
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
					onClose={ closeTickerControl }
				>
					<form>
						<label htmlFor="url-example">Update url on anchor tag.</label>
						<input type="url"
							name="url-example"
							placeholder="enter url..."
							value={ url }
							default={ url }
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
