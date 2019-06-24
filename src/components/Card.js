import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  addEmoji = () => {
    const { noteEmoji } = this.props

    return noteEmoji;
  }
  render() {
    return (
      <div className="card">
        <div className="card__content">
          <span className="card__content-text">{ this.noteText }</span>
          <span className="card__content-emoji">{ this.addEmoji() }</span>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  noteText: PropTypes.string,
  noteEmoji: PropTypes.string,
};

export default Card;
