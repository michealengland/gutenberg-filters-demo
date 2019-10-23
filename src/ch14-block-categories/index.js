/**
 * This block is borrowed from Chapter 2 of the Zac Gordon Course.
 *
 * @source https://github.com/zgordon/gutenberg-course/blob/master/blocks/02-richtext/index.js
 */

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

/**
 * Register block
 */
export default registerBlockType(
	'gfd/richtext',
	{
		title: __( 'RichText', 'gfd' ),
		description: __( 'Example rich text block.', 'gfd' ),
		category: 'ch-14-category',
		icon: 'smiley',
		keywords: [
			__( 'Example Block', 'gfd' ),
		],
		attributes: {
			message: {
				type: 'array',
				source: 'children',
				selector: '.message-body',
			},
		},
		edit: props => {
			const { attributes: { message }, className, setAttributes } = props;
			const onChangeMessage = message => { setAttributes( { message } ) };
			return (
				<div className={ className }>
					<RichText
						tagName="div"
						multiline="p"
						placeholder={ __( 'Add your custom message', 'gfd' ) }
				  		onChange={ onChangeMessage }
				  		value={ message }
			  		/>
				</div>
			);
		},
		save: props => {
			const { attributes: { message } } = props;
			return (
				<div>
					<div class="message-body">
						{ message }
					</div>
				</div>
			);
		},
	},
);
