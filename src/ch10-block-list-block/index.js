/**
 * It receives the original BlockListBlock component and returns a new wrapped component.
 *
 * @link https://developer.wordpress.org/block-editor/developers/filters/block-filters/#editor-blocklistblock
 * @source
 */

const { createHigherOrderComponent } = wp.compose;

const withClientIdClassName = createHigherOrderComponent( ( BlockListBlock ) => {
	// Return a component with a new class name in the editor only.
	return ( props ) => {
		// console.log( props );

		// Return a wrapped with custom class names around each block in the editor.
		return <BlockListBlock { ...props } className={ 'aparecium block-hash-' + props.clientId } />;
	};
}, 'withClientIdClassName' );

wp.hooks.addFilter(
	'editor.BlockListBlock',
	'gfd/with-client-id-class-name',
	withClientIdClassName
);
