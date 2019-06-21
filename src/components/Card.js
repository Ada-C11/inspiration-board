import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji, { getUnicode } from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    
    const {text, emoji} = this.props;
    const cardEmoji = emoji ? getUnicode(emoji) : emoji;

    return (
      <div className="card">
        {/* Card */}
        <p className = 'card__content-text'> {text} </p>
        <p className = 'card__content-emoji'> {cardEmoji} </p>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
