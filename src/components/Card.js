import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
      emoji: props.emoji ? props.emoji : '',
    };
  }
  render() {
    return (
      <div className="card card__content">
        <p className="card__content-text">{this.state.text}</p>
        <p className="card__content-emoji">{emoji.getUnicode(this.state.emoji)}</p>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string,
};

export default Card;
