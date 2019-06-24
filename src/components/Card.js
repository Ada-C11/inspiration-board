import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  render() {
    const displayEmoji = (this.props.emoji) ? emoji.getUnicode(this.props.emoji) : ""
    const {onDeleteCard, id, text} = this.props;

    return (
      <div className="card">
        <div className="card__content">
          <p className="card__content-text">{text}</p>
          <p className="card__content-emoji">{displayEmoji}</p>
        </div>
        <button 
          className='card__delete'
          onClick = {() => onDeleteCard(id)}
          >
          X
        </button>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  onDeleteCard: PropTypes.func,
  id: PropTypes.number
};

export default Card;
