import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';

class Card extends Component {


  displayEmoji = (emojiInput) => {
    if (emojiInput) {
      return (
        emoji.getUnicode(emojiInput)
      )
    } 
  }

  render() {
    const {onDeleteCard, id, text, emoji} = this.props;

    return (
      <div className="card">
        <section className='card__content'>
            <p className='card__content-text'> {text} </p>
            <p className='card__content-emoji'> {this.displayEmoji(emoji)} </p>
        </section>
        <button 
        className='card__delete'
        onClick={() => onDeleteCard(id) } > 
          Delete Card 
        </button>
      </div>
    )
  }
}

Card.propTypes = {
  onDeleteCard: PropTypes.func,
  id: PropTypes.number,
  text: PropTypes.string,
  emoji: PropTypes.string
};

export default Card;
