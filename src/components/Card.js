import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

// class Card extends Component {
const Card = (props) => {
  // const emoji = require('emoji-dictionary');
  console.log(emoji.getUnicode("heart_eyes"));
  const {text, cardEmoji} = props;

  let displayEmoji = cardEmoji
  if (cardEmoji){
    displayEmoji = emoji.getUnicode(cardEmoji)
  }
  // render() {
    return (
      <div className="card">
        <div className="card__content">
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
