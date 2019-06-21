import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  // convertToEmoji = () => {

  // }
  render() {
    return (
      <div className="card">
        <div className="card__content">
          <div className="card__content-text">
            {this.props.text}
          </div>
          <div className="card__content-emoji">
            <span className="emoji" role="img" aria-label={emoji.getName(this.props.emoji)} >{emoji.getUnicode(`${this.props.emoji}`)}</span>
          </div>
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
