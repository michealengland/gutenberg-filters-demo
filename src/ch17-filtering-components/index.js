/**
 * Filter the blockEdit function.
 *
 * Check for block name match and return modified block.s
 *
 * @link https://developer.wordpress.org/block-editor/developers/filters/block-filters/#editor-blockedit
 */

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import HeadingToolbar from './heading-toolbar';

/**
 * WordPress dependencies
 */
const {
	blockEditor: {
		AlignmentToolbar,
		BlockControls,
		InspectorControls,
		RichText,
	},
	blocks: {
		createBlock,
	},
	components: {
		PanelBody,
	},
	compose: {
		createHigherOrderComponent,
	},
	element: {
		useRef,
	},
	i18n: {
		__,
	},
} = wp;

// Filter Block Edit
const withInspectorControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const {
			attributes,
			className,
			mergeBlocks,
			name,
			onReplace,
			setAttributes,
		} = props;

		// Bail if not heading block.
		if ( name !== 'core/heading' ) {
			return <BlockEdit { ...props } />;
		}

		const {
			align,
			content,
			level,
			placeholder,
		} = attributes;

		const ref = useRef();
		const tagName = 'h' + level;

		// Return BlockEdit with modified block.
		// Props are not passed to BlockEdit to override the block.
		return (
			<>
				<BlockEdit />
				<BlockControls>
					<HeadingToolbar
						minLevel={ 1 }
						maxLevel={ 4 }
						selectedLevel={ level }
						onChange={ ( newLevel ) =>
							setAttributes( { level: newLevel } )
						}
					/>
					<AlignmentToolbar
						value={ align }
						onChange={ ( nextAlign ) => {
							setAttributes( { align: nextAlign } );
						} }
					/>
				</BlockControls>
				<RichText
					ref={ ref }
					identifier="content"
					tagName={ tagName }
					value={ content }
					onChange={ ( value ) =>
						setAttributes( { content: value } )
					}
					onMerge={ mergeBlocks }
					onSplit={ ( value ) => {
						if ( ! value ) {
							return createBlock( 'core/paragraph' );
						}

						return createBlock( 'core/heading', {
							...attributes,
							content: value,
						} );
					} }
					onReplace={ onReplace }
					onRemove={ () => onReplace( [] ) }
					className={ classnames( className, {
						[ `has-text-align-${ align }` ]: align,
					} ) }
					placeholder={ placeholder || __( 'Write heading…' ) }
				/>
				<InspectorControls>
					<PanelBody title={ __( 'Heading settings 2' ) }>
						<p>{ __( 'Level' ) }</p>
						<HeadingToolbar
							isCollapsed={ false }
							minLevel={ 1 }
							maxLevel={ 4 }
							selectedLevel={ level }
							onChange={ ( newLevel ) =>
								setAttributes( { level: newLevel } )
							}
						/>
					</PanelBody>
				</InspectorControls>
			</>
		);
	};
}, 'withInspectorControl' );

wp.hooks.addFilter(
	'editor.BlockEdit',
	'gfd/filter-core-heading',
	withInspectorControls
);
