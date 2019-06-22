import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  removeCard = () => {
    this.props.removeCardCallback(this.props.index, this.props.id)
  }
  render() {

    let emojiUni = (this.props.emoji) ? emoji.getUnicode(this.props.emoji) : "";

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
