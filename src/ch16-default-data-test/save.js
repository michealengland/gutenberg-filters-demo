/**
 * External dependencies
 */

/**
 * WP dependencies
 */
const { __ } = wp.i18n;

const Save = (props) => {
	const {
		className,
		// attributes: {
		// 	testAttribute1,
		// 	testAttribute2,
		// },
	} = props;

	return (
		<div className={ className }>
			<h2>{ __( 'Attribute Test' ) }</h2>
		</div>
	);
};

export default Save;
