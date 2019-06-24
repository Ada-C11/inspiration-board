import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';
import Axios from 'axios';

class Card extends Component {

  render() {
    const id = this.props.id
    const emojis = (this.props.emoji) ? this.props.emoji : ""
    return (
      <div className="card">
        <section className="card__content">
          <div className="card__content-text">
            {this.props.text}
          </div>
          <div className="card__content-emoji">
            {emoji.getUnicode(emojis)}
          </div>
          <div>
            <button onClick={() => this.props.onDeleteCardCallback(id)}
            className="card__delete"> Delete Card </button> 
          </div>
        </section>
      </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  emoji: PropTypes.string,

};

export default Card;
