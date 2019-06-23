import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji, { getUnicode } from 'emoji-dictionary';

import './Card.css';
import { stringLiteral } from '@babel/types';

class Card extends Component {
  render() {

    const { text, emoji, id, deleteCardCallback } = this.props;
    const cardEmoji = emoji ? getUnicode(emoji) : emoji;
    
    

    return (
      <div className="card">
        <div className='card__content'>
          {/* Card */}
          <p className='card__content-text'> {text} </p>
          <p className='card__content-emoji'> {cardEmoji} </p>
          <button className = 'card__content-delete'
          onClick={() => {deleteCardCallback(id)}}> 
          Delete </button>
        </div>
      </div> 
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteCardCallback: PropTypes.func.isRequired
};

export default Card;
