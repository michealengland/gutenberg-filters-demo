/**
 * Filter a saved element.
 *
 * @param element
 * @param blockType
 * @param attributes
 * @return Object
 *
 * @link https://developer.wordpress.org/block-editor/developers/filters/block-filters/#blocks-registerblocktype
 */

function modifySavedElements( element, blockType, blockAttributes ) {
	if ( blockType.name !== 'core/list' ) {
		return element;
	}

	// console.log( element );
	// console.log( blockType );
	// console.log( blockAttributes );

	return (

		<div className={ 'modified-saved-element' }>
			{ element }
		</div>
	);
}

wp.hooks.addFilter(
	'blocks.getSaveElement',
	'core/list-block',
	modifySavedElements
);
