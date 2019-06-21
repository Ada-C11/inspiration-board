import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      text: props.text,
      emoji: props.emoji ? props.emoji : '',
    };
  }
  render() {
    return (
      <div className="card card__content">
        <p >{this.state.id}</p>
        <p className="card__content-text">{this.state.text}</p>
        <p className="card__content-emoji">{emoji.getUnicode(this.state.emoji)}</p>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card;
