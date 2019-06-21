import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // text: props.text,
      // emoji: props.emoji,
      // index: props.index,


    }
  }
  removeCard = () => {
    this.props.removeCardCallback(this.props.index)
  }
  render() {

    // console.log(this.state.text)
    // console.log("Emoji")
    // console.log(this.state.emoji)
    let emojiUni = (this.props.emoji) ? emoji.getUnicode(this.props.emoji) : "";


    // console.log(emoji.getUnicode(this.state.emoji))
    // console.log(emoji.unicode)
    return (
      <div className="card">
        <section className="card__content">
          <div className="card__content-text">{this.props.text}</div>
          <div className="card__content-emoji">{emojiUni}</div>
          <button className="card__delete" onClick={this.removeCard}>Take Card</button>
        </section>

      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
