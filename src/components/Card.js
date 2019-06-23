import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  render() {
  const {text, emojiText} = this.props;

    return (
      <div className="card card__content">
        <div className="card__content-text">
          {text}
        </div>
        <div className="card__content-emoji">
        {emojiText ? emoji.getUnicode(emojiText) : ""}
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emojiText: PropTypes.string
};

export default Card;
