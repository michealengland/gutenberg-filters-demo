/**
 * External dependencies
 */
import { range } from 'lodash';

/**
 * WordPress dependencies
 */
const {
	components: {
		Toolbar,
	},
	compose: {
		withState,
	},
	i18n: {
		__,
		sprintf,
	},
} = wp;

/**
 * Internal dependencies
 */
import HeadingLevelIcon from './heading-level-icon';

const HeadingToolbar = withState()( ( props ) => {
	const {
		isCollapsed = true,
		minLevel,
		maxLevel,
		selectedLevel,
		onChange,
	} = props;

	const createLevelControl = ( targetLevel ) => {
		const isActive = targetLevel === selectedLevel;

		return ( {
			icon: (
				<HeadingLevelIcon
					level={ targetLevel }
					isPressed={ isActive }
				/>
			),
			// translators: %s: heading level e.g: "1", "2", "3"
			title: sprintf( __( 'Heading %d' ), targetLevel ),
			isActive,
			onClick: () => onChange( targetLevel ),
		} );
	};

	// Loop through controls based on range.
	const toolBarControls = range( minLevel, maxLevel, 1 ).map( ( index ) => createLevelControl( index, selectedLevel, onChange ) );

	return (
		<>
			<Toolbar
				isCollapsed={ isCollapsed }
				icon={ <HeadingLevelIcon level={ selectedLevel } /> }
				controls={ toolBarControls }
				label={ __( 'Change heading level' ) }
			/>
		</>
	);
} );

export default HeadingToolbar;
