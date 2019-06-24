import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
   displayEmoji = (emojiInput) => {
     if(emojiInput) {
       return (
         emoji.getUnicode(emojiInput)
       )
     }
   }

  render() {
    const { onDeleteCard, id, text, emoji } = this.props;

    return (
      <div className="card">
        <section className='card__content'>
          <p className='card__content-text'> {text} </p>
          <p className='card__content-emoji'> {this.displayEmoji(emoji)} </p>
        </section>

        <button
          type="button"
          className="card__delete"
          aria-label="Delete" onClick={() => onDeleteCard(id)}>
            Delete
        </button>
      </div>
    )
  }
}

Card.propTypes = {
  onDeleteCard: PropTypes.func.isRequired
};

export default Card;
