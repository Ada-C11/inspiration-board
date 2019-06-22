import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {

    const displayText = (this.props.text) ? this.props.text : ""

    const displayEmoji = (this.props.emoji) ? emoji.getUnicode(this.props.emoji) : ""

    return (
      <div className="card">
        <section className="card__content">
          #{ this.props.id }:
            <p className="card__content-text"> { displayText } </p> 
            <p className="card__content-emoji"> { displayEmoji } </p>
            <button
              type="button"
              className = "card__delete"
              onClick = {() => this.props.onDeleteCard(this.props.id)}
            >
              Delete
            </button>
        </section>
      </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  emoji: PropTypes.string,
  onDeleteCard: PropTypes.func,
};

export default Card;
