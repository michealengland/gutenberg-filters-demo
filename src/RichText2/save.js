/* global wp */

/**
 * BLOCK SAVE: Blockquote Block Plugin
 *
 * Define Blockquote block save
 */

/**
 * External dependencies
 */
import PropTypes from 'prop-types';

/**
 * WP dependencies
 */
const { RichText } = wp.editor;

const BlockquoteSave = (props) => {
  const {
    attributes: {
      content,
    },
  } = props;

  return (
    <RichText.Content
      tagName="div"
      value={content}
    />
  );
};

BlockquoteSave.propTypes = {
  attributes: PropTypes.object.isRequired,
};

export default BlockquoteSave;
