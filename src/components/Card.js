import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';
import { prototype } from 'events';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <section className="card__content">
          <div className="card__content-text">{this.props.text}</div>
          <div className="card__content-emoji">{this.props.emoji}</div>
        </section>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card;
