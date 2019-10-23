<?php
/**
 * Setup style variations that render from the server using PHP.
 *
 * @link https://developer.wordpress.org/block-editor/developers/filters/block-filters/#server-side-registration-helper
 */

// The Gutenberg plugin must be installed for this to work.
if ( ! function_exists( 'register_block_style' ) ) {

	/**
	 * Adding inline styles with register_block_style.
	 *
	 * @link https://developer.wordpress.org/block-editor/developers/filters/block-filters/#server-side-registration-helper
	 * @param name = string
	 * @param label = string
	 * @param inline_styles Optional = 'inline CSS string'
	 * @param style_handle Optional = 'enqueued style handle.'
	 */
	function setup_ssr_filters() {

		// Adds a new block variation blue-quote that outputs inline styles.
		register_block_style(
			'core/quote',
			array(
				'name'         => 'blue-quote-1',
				'label'        => __( 'Blue Quote 1' ),
				'inline_style' => '.wp-block-quote.is-style-blue-quote-1 { color: red; }',
			)
		);

		// Adds a new style variation with class name and imports styles from quote-2-style.css
		register_block_style(
			'core/quote',
			array(
				'name'         => 'blue-quote-2',
				'label'        => __( 'Blue Quote 2' ),
				'style_handle' => 'quote-2-style',
			)
		);

		// Adds a new style variation with inline CSS and class name.
		register_block_style(
			'core/quote',
			array(
				'name'         => 'blue-quote-3',
				'label'        => __( 'Blue Quote 3' ),
			)
		);
	}
	// add_action( 'admin_init', 'setup_ssr_filters' );

	/**
	 * Deregister Blue Quote 3
	 */
	function remove_ssr_filter() {
		/**
		 * only unregisters styles that were registered on the server using register_block_style
		 *
		 * @param block = 'registered name of the block'.
		 * @param style_handle = 'name of the style'.
		 */
		unregister_block_style( 'core/quote', 'blue-quote-3' );

	}
	// add_action( 'admin_init', 'remove_ssr_filter' );
}
