import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render(props) {
    return (
      <div className="card">
        <div className="card__content">
          <p className = "card__content-text">{this.props.text ? this.props.text : null}</p>
          <p className="card__content-emoji">{this.props.emoji ? emoji.getUnicode(this.props.emoji) : null}</p>
        </div>
        
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string
};

export default Card;
