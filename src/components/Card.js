import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji, { getUnicode } from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    let cardEmoji = this.props.emoji; 
    cardEmoji = cardEmoji ? getUnicode(cardEmoji) : cardEmoji
    
    return (
      <div className="card">
        {/* Card */}
        <p className = 'card__content-text'> {this.props.text} </p>
        <p className = 'card__content-emoji'> {cardEmoji} </p>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
