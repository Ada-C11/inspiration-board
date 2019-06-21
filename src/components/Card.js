import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

// class Card extends Component {
const Card = (props) => {

  const { text, cardEmoji, deleteCardCallback, id} = props;

  let displayEmoji = cardEmoji
  if (cardEmoji) {
    displayEmoji = emoji.getUnicode(cardEmoji)
  }
  const onClickDelete = () => {
    console.log(id)
    return deleteCardCallback(id)
  }
  return (
    <div className="card">
      <div className="card__content">
      <button 
          type="button" 
          className="card__delete" 
          
          onClick={onClickDelete}
        >
          Delete Card
        </button>
        <span className="card__content-text">{id}</span>
        <span className="card__content-text">{text}</span>
        <span className="card__content-emoji">{displayEmoji}</span>
      </div>
    </div>
  )
  // }
}

Card.propTypes = {

};

export default Card;
