import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  const deleteCard = () => {
    props.deleteCardCallback(props.id)
  }

  console.log(props.text)

  return (
    <div className="card">
      <div className="card__content">
        <div className="card__content-text">
          {props.text && `Text: ${props.text}`}
        </div>
        <div className="card__content-emoji">
          {props.emoji && `Emoji: ${emoji.getUnicode(props.emoji)}`}            
        </div>
        <div className="card__delete">
          <button onClick={deleteCard}>Delete Card</button>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card;
