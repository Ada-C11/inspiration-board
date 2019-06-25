import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <section className="card__content">
          <p className="card__content-text">{this.props.text}</p>
          {this.props.emoji && (
           <p className="card__content-emoji"> {emoji.getUnicode(this.props.emoji) ? emoji.getUnicode(this.props.emoji) : this.props.emoji}</p>
          )}
        </section>
      </div>
    );
  }
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  emoji1: PropTypes.string,
};

export default Card;
