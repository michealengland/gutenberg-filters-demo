const {
	blocks: {
		registerBlockType,
	},
	editor: {
		InnerBlocks,
	},
} = wp;

registerBlockType( 'gfd/inner-block-test', {
	title: 'InnerBlocks Test',
	icon: 'align-left',
	category: 'common',
	edit() {
		return (
			<InnerBlocks
				layouts={ [
					{ name: 'inner', label: 'Inner Content', icon: 'columns' },
				] }
				templateLock={ 'all' }
				template={
					[
						[ 'core/image', { layout: 'inner' } ],
						[ 'core/heading', { layout: 'inner', placeholder: 'Tile Label...' } ],
					]
				}
			/>
		);
	},
	save() {
		return (
			<InnerBlocks.Content />
		);
	},
} );
