const { apiFetch } = wp;
const { registerStore } = wp.data;

// Set initial state value.
const DEFAULT_STATE = {
	prices: {},
	discountPercent: 0,
};

const actions = {
	setAuthors( item, price ) {
		return {
			type: 'SET_PRICE',
			item,
			price,
		};
	},
};

registerStore( 'my-shop', {
	reducer( state = DEFAULT_STATE, action ) {
		switch ( action.type ) {
			case 'SET_PRICE':
				return {
					...state,
					prices: {
						...state.prices,
						[ action.item ]: action.price,
					},
				};
		}

		return state;
	},

	actions,

	selectors: {
		getPrice( state, item ) {
			const { prices, discountPercent } = state;
			const price = prices[ item ];

			return price * ( 1 - ( 0.01 * discountPercent ) );
		},
	},

	controls: {
		FETCH_FROM_API( action ) {
			return apiFetch( { path: action.path } );
		},
	},

	resolvers: {
		* getAuthors( item ) {
			const path = '/wp/v2/prices/' + item;
			const price = yield actions.fetchFromAPI( path );
			return actions.setPrice( item, price );
		},
	},
} );

//

