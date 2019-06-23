import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      text: props.text,
      cardEmoji: props.cardEmoji ? props.cardEmoji : '',
      deleteCardCallback: props.deleteCardCallback
    }
  }

  render() {
    return (
      <div className="card card__content">
        <button
          type="button"
          className="card__delete"
          onClick={() => this.state.deleteCardCallback(this.state.id)}
        >
          Delete Card
        </button>

        <p className="card__content-text">{this.state.id}</p>
        <p className="card__content-text">{this.state.text}</p>
        <p className="card__content-emoji">{emoji.getUnicode(this.state.cardEmoji)}</p>
      </div>
    )
  }
}


Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  id: PropTypes.number.isRequired,
  deleteCardCallback: PropTypes.func.isRequired

};

export default Card;
