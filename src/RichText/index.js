/* global wp */

/* eslint-disable react/prop-types */

/**
 * BLOCK: Blockquote
 *
 * Register Blockquote Block
 */

import edit from './edit';
import save from './save';

// //  Import CSS.
// import './editor.scss';

/**
 * WordPress dependencies
 */
const { __, setLocaleData } = wp.i18n;
const { registerBlockType, createBlock } = wp.blocks;

// Register the textdomain.
setLocaleData({ '': {} }, 'blockquote');

/**
 * Register the Blockquote block.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('dj/blockquote', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __('Blockquote', 'blockquote'), // Block title.
  description: __('Give quoted text visual emphasis.', 'blockquote'), // Block description.
  icon: 'format-quote', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [
    __('blockquote', 'blockquote'),
    __('quote', 'blockquote'),
  ],
  attributes: {
    content: {
      type: 'string',
      source: 'html',
      selector: 'blockquote',
    },
    placeholder: {
      type: 'string',
      default: '',
    },
  },
  supports: {
    className: false,
    customClassName: false,
  },
  transforms: {
    to: [{
      type: 'block',
      blocks: ['core/paragraph'],
      transform: ({ content }) => createBlock(
        'core/paragraph', {
          content,
        }
      ),
    }],
    from: [{
      type: 'block',
      blocks: ['core/paragraph'],
      transform: ({ content }) => createBlock(
        'dj/blockquote', {
          content,
        }
      ),
    }],
  },
  edit,
  save,
});
