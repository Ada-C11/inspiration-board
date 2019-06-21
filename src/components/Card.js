import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {

    // const {id, text, emoji } = this.props;

    // const emoji = require("emoji-dictionary");

   let displayEmoji;
      if (this.props.emoji) {
          displayEmoji = emoji.getUnicode(this.props.emoji);
      }
    

    return (
      <div className='card__content'>
        <p className='card__content-text'>{this.props.text}</p>
        <p className='card__content-emoji'>{displayEmoji}</p>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
