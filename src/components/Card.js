import React from 'react';
import PropTypes from 'prop-types';
import Emoji from 'emoji-dictionary';

import './Card.css';

const Card = ({ text, emoji, deleteCardCallback, id }) => {
  return (
    <div className="card card__content">
      <button className="card__delete" onClick={() => deleteCardCallback(id)}>
        X
      </button>
      <p className="card__content-text"> {text} </p>
      {emoji && (
        <p className="card__content-emoj"> {Emoji.getUnicode(emoji)} </p>
      )}
    </div>
  );
};

Card.propTypes = {};

export default Card;
