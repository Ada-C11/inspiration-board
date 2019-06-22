import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';


class Card extends Component {

  onDeleteClick = () => {
    console.log(this.props)
    this.props.deleteCard(this.props.id);
  }

  render() {
    return (
      <div className="card">
        <div className="card__content">
          <div className="card__content-text">
            {this.props.text}
          </div>
          <div className="card__content-emoji">
            <span className="emoji"
              role="img"
              aria-label={emoji.getName(this.props.emoji)}
            >
              {emoji.getUnicode(`${this.props.emoji}`)}
            </span>
          </div>
          <div className="button__container">
            <button className="card__delete"
              onClick={this.onDeleteClick}>
              Delete
            </button>
          </div>
        </div >
      </div >
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  id: PropTypes.number,
  deleteCard: PropTypes.func,
};

export default Card;
