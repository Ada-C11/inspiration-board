import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <div className="card">
        {this.props.text} {this.props.emoji}
      </div>
    )
  }
}


Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card
