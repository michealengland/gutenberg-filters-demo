const { dispatch } = wp.data;
const {
	select,
	subscribe,
} = wp.data;

// Array of objects to pass to the store.
const authors = [
	{
		id: 1275,
		name: 'Miguel Bustillo',
		url: 'https://www.wsj.com/news/author/1275',
	},
	{
		id: 1275,
		name: 'Miguel Bustillo',
		url: 'https://www.wsj.com/news/author/1275',
	},
];

// 1. Write to the store using setAuthors method.
dispatch( 'dj-wp-byline-authors' ).setAuthors( authors );
// eslint-disable-next-line no-console
console.log( 'STORE dispatch setAuthors()', authors );

// 2. Next, I'm going to select a value from the store.
const bylineAuthors = select( 'dj-wp-byline-authors' ).getAuthors();
// eslint-disable-next-line no-console
console.log( 'STORE select getAuthors()', bylineAuthors );

// 3. Now it's time to change the value again and see what happens.
// Note: the previous select console statement will NOT auto read the updated value.
// dispatch( 'dj-wp-byline-authors' ).setAuthors( 'hammer', 5.31 );

subscribe( () => {
	// You could use this opportunity to test whether the derived result of a
	// selector has subsequently changed as the result of a state update.
	const subscribedValue = select( 'dj-wp-byline-authors' ).getAuthors();
	// eslint-disable-next-line no-console
	console.log( 'STORE subscribe() getAuthors()', subscribedValue );
} );

// When content is updated / intial empty store.
// Read / parse and write an array objects to the data store.

/**
 * Internal dependencies
 */
import './store-test';
