import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor (props) {
    super(props);

    this.state = {
      text: props.text,
      emoji: props.emoji,
    }
  }

  render() {
    return (
      <section className="card">
        <section className="card__content">
          <p className="card__content-text">
            {this.state.text}
          </p> 
          <span className="card__content-emoji">
            {emoji.getUnicode(`${this.state.emoji}`)}
          </span>
        </section>
      </section>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string,
};

export default Card;
