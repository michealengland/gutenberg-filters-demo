/* global wp */
/* eslint-disable*/
/**
 * BLOCK EDIT: Blockquote Block Plugin
 *
 * Define Blockquote block edit
 */

/**
 * External dependencies
 */
import PropTypes from 'prop-types';

/**
 * WP dependencies
 */
const { RichText } = wp.editor;
const { createBlock } = wp.blocks;

const name = 'dj/blockquote';

const BlockquoteEdit = (props) => {
  const {
    attributes: {
      content,
      placeholder,
    },
    mergeBlocks,
    onReplace,
    setAttributes,
  } = props;

  // Default value when no authors are found.
  // const authors = [];

  // Return a new block on button click.
  const insertNewLine = (email) => {
    const exampleEmail = 'mike@webdevstudios.com';
    const originalContent = content;
    const newContent = `<p>Default line example <a href="mailto:${email}">newEmail@example.com</a></p>`;
    setAttributes( {content: originalContent + newContent} );
  };

  // Loop through authors and create a new line per author.
  // authors.map((authors)=>insertNewLine(authors.email));

  const onButtonClick = () => {
    insertNewLine(email)
  };

  // // const newContent = '<p>New content <a href="mailto:email@example.com">email@example.com</a></p>';
  // const InsertedContent = '<p>Default line example <a href="mailto:newEmail@example.com">newEmail@example.com</a></p>';

  // setAttributes( {content: content+InsertedContent} );

  return (
    <>
      <RichText
        tagName="div"
        multiline
        onChange={(nextContent) => {
          setAttributes({
            content: nextContent,
          });
        }}
        placeholder={placeholder}
        value={content}
      />
      <button onClick={onButtonClick}>Create New Line</button>
    </>
  );
};

BlockquoteEdit.propTypes = {
  attributes: PropTypes.object.isRequired,
  setAttributes: PropTypes.func.isRequired,
  mergeBlocks: PropTypes.func.isRequired,
  onReplace: PropTypes.func.isRequired,
};

export default BlockquoteEdit;
