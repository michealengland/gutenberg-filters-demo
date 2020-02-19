/**
 * WP dependencies
 */
const {
	i18n: {
		__,
	},
} = wp;

const Edit = ( props ) => {
	const {
		setAttributes,
		className,
		attributes: {
			testAttribute1,
			testAttribute2,
		},
	} = props;

	console.log( props );

	console.log( 'initial atts', { testAttribute1, testAttribute2 } );

	setAttributes( {
		testAttribute1: 'newValue',
		testAttribute2: 'default-value2',
	} );

	return (
		<div className={ `${ className } ${ props.clientId }` }>
			<h2>{ props.clientId }</h2>
		</div>
	);
};

export default Edit;
