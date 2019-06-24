import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  handleButtonClick = () => {
    // pass along cardIndex to delete card and remove from API...
    this.props.deleteCardCallback(this.props.cardIndex, this.props.id) 
  }

  render() {
    return (
      <div className="card__content">
        <p className="card__content-text">{this.props.text ? this.props.text : null }</p>
        <p className="card__content-emoji">{this.props.emoji ? emoji.getUnicode(this.props.emoji) : null}</p>
        <button className="card-delete" onClick={this.handleButtonClick}>Delete</button>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number.isRequired,
  emoji: PropTypes.string,
  cardIndex: PropTypes.number,
  deletedCardCallback: PropTypes.func
};

export default Card;
