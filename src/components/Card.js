import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  renderText() {
    if (this.props.text) {
      return (
        <div className="card_content-text">{this.props.text}</div>
      )
    }
  }

  renderEmoji() {
    if (this.props.emoji) {
      return(
        <div className="card_content-emoji">{this.props.emoji}</div>
      )
    }
  }
  render() {
    return(
      // <div>{this.renderText}</div>
      // <div>{this.renderEmoji}</div>
      <div className="card">
        {emoji.getUnicode('100')}
      </div>
    )
  }
}


Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card
