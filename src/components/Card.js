import React from 'react';
import PropTypes from 'prop-types';
import Emoji from 'emoji-dictionary';

import './Card.css';

const Card = ({ text, emoji }) => {
  return (
    <div className="card">
      <p> {text} </p>
      {emoji && <p> {Emoji.getUnicode(emoji)} </p>}
    </div>
  );
};

Card.propTypes = {};

export default Card;
