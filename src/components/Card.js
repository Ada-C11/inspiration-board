import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: props.text,
      emoji: props.emoji,
    }
  }
  render() {
    console.log(this.state.text)
    console.log(emoji.getUnicode(this.state.emoji))
    return (
      <div className="card">
        <section className="card__content">
          <div className="card__content-text">{this.state.text}</div>
          <div className="card__content-emoji">{this.state.emoji}</div>
        </section>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
