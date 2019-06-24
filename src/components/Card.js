import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';


import './Card.css';

class Card extends Component {


  render() {
    const isEmoji = (this.props.emoji) ? this.props.emoji : ""
    const id = this.props.id
    return (
      <div className="card">
        <div className="card__content">
          <div className="card__content-text">
            {this.props.text}
          </div>
          <div className="card__content-emoji">
            {emoji.getUnicode(isEmoji)}
          </div>
          <div>
            <button onClick={() => this.props.deleteCardCallback(id)} className="card__delete"> Delete </button>
          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  id: PropTypes.number,
  deleteCardCallback: PropTypes.func
};

export default Card;
