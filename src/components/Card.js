import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      removed: false,
    }
  }

  render() {
    console.log(`${typeof this.props.cardEmoji}`);
    return (
      <div className="card">
        <div className="card__content">
          <section className="card__content-text">{this.props.cardMessage}</section>
          <section className="card__content-emoji">
            {emoji.getUnicode(this.props.cardEmoji)}
          </section>
        </div>
        <section className="card__delete">X</section>
      </div>
    )
  }
}

Card.propTypes = {
  cardMessage: PropTypes.string,
  cardEmoji: PropTypes.string,
};

export default Card;
