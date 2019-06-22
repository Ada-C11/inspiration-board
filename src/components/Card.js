import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = ({ text, emojiName }) => {
  return (
    <div className="card">
      <p> {text} </p>
      {emojiName && <p> {emoji.getUnicode(emojiName)} </p>}
    </div>
  );
};

Card.propTypes = {};

export default Card;
