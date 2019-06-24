import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  onDeleteClick = () => {
    this.props.onDeleteClick(this.props.id)
    console.log(this.props.id)
    console.log(this.props)
    console.log(emoji.getUnicode("beer"))
  }

  render() {
    return (
      <div className="card">
        <div className="card__content">
          <h2 className="card__content-text">{this.props.text}</h2>
          <h2 className="card__content-emoji">{emoji.getUnicode(this.props.emoji)}</h2>
        </div>
        <button 
          className="card__delete" 
          onClick={this.onDeleteClick}>
          Delete
        </button>

      </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  deleteCardCallback: PropTypes.func.isRequired,
};

export default Card;
