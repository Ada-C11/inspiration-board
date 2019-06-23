import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <section className="card__content">
          <p className="card__content-text">{this.props.quote}</p>
          <p className="card__content-emoji">{this.props.Emoji ? emoji.getUnicode(this.props.Emoji) : ""}</p>
        </section>
      </div>
    )
  }
}

Card.propTypes = {
  quote: PropTypes.string.isRequired,
};

export default Card;
