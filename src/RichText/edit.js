/* global wp */

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

  return (
    <RichText
      tagName="blockquote"
      onChange={(nextContent) => {
        setAttributes({
          content: nextContent,
        });
      }}
      onSplit={(value) => {
        console.log('MLE', value);
        if (! value) {
          return createBlock(name);
        }

        return createBlock(name, {
          ...props.attributes,
          content: value,
        });
      }}
      onMerge={mergeBlocks}
      onReplace={onReplace}
      onRemove={onReplace ? () => onReplace([]) : undefined}
      placeholder={placeholder}
      value={content}
    />
  );
};

BlockquoteEdit.propTypes = {
  attributes: PropTypes.object.isRequired,
  setAttributes: PropTypes.func.isRequired,
  mergeBlocks: PropTypes.func.isRequired,
  onReplace: PropTypes.func.isRequired,
};

export default BlockquoteEdit;
