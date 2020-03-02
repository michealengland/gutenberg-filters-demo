// Our completer
const acronymCompleter = {
	name: 'acronyms',
	triggerPrefix: '',
	options: [
		{ letters: 'ELE', expansion: 'Everybody Love Everybody' },
	],
	getOptionKeywords( { letters, expansion } ) {
		const expansionWords = expansion.split( /\s+/ );
		return [ letters, ...expansionWords ];
	},
	getOptionLabel: ( acronym ) => acronym.letters,
	getOptionCompletion: ( { letters, expansion } ) => (
		<span>
			{ `${ expansion } (${ letters })` }
		</span>
	),
};

// Our filter function
function appendAcronymCompleter( completers, blockName ) {
	return blockName === 'core/paragraph' ? [ ...completers, acronymCompleter ] : completers;
}

// Adding the filter
wp.hooks.addFilter(
	'editor.Autocomplete.completers',
	'my-plugin/autocompleters/acronym',
	appendAcronymCompleter
);
