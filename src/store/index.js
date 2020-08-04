// const { apiFetch } = wp;
const { registerStore } = wp.data;

// Set initial state value.
const DEFAULT_STATE = {
	authors: {},
	discountPercent: 0,
};

const actions = {
	setAuthors( authorsData ) {
		return {
			type: 'SET_AUTHORS',
			authorsData,
		};
	},
};

registerStore( 'dj-wp-byline-authors', {
	reducer( state = DEFAULT_STATE, action ) {
		switch ( action.type ) {
			case 'SET_AUTHORS':
				return {
					...state.authors,
					authors: action.authorsData,
				};
		}

		return state;
	},
	actions,
	selectors: {
			( state ) {
			return state.authors;
		},
	},
} );
