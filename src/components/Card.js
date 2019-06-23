import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  deleteCard = () => {
    this.props.onDeleteCardCallback(this.props.id);
  }


  render() {

    const {id, text} = this.props;

    let displayEmoji;
    if (this.props.emoji) {
      displayEmoji = emoji.getUnicode(this.props.emoji);
    }


    return (
      <div className='card__content'>
        <p className='card__content-text'>{id}</p>
        <p className='card__content-text'>{text}</p>
        <p className='card__content-emoji'>{displayEmoji}</p>

        <button className="card__delete" type="button" onClick={this.deleteCard}>
          Delete
        </button>
      </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string,
  emoji: PropTypes.string,
  onDeleteCardCallback: PropTypes.func.isRequired
};

export default Card;
