import React from 'react';
import PropTypes from 'prop-types';

const maxTextLength = 80;

function CustomText({ text, maxLength = maxTextLength }) {
  const filteredText = text
    ? `${text.slice(0, maxLength)}${text.length > maxLength ? '...' : ''}`
    : '';

  return <>{filteredText}</>;
}
CustomText.propTypes = {
  text: PropTypes.string,
  maxLength: PropTypes.number,
};

export default CustomText;
