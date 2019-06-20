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
    console.log(this.state.emoji)
    let emojiUni = (this.state.emoji) ? emoji.getUnicode(this.state.emoji) : emoji.getUnicode("dog");


    // console.log(emoji.getUnicode(this.state.emoji))
    // console.log(emoji.unicode)
    return (
      <div className="card">
        <section className="card__content">
          <div className="card__content-text">{this.state.text}</div>
          <div className="card__content-emoji">{emojiUni}</div>
        </section>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
