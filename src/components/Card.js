import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  // onDelete = () => {
  //   this.props.deleteCallback(this.props.id)
  // }

  render() {
  const {id, text, emojiText, deleteCallback} = this.props;

    return (
      <div className="card card__content">
        <div className="card__content-text">
          {text}
        </div>
        <div className="card__content-emoji">
        {emojiText ? emoji.getUnicode(emojiText) : ""}
        </div>
        <button onClick={() => deleteCallback(this.props)} className="card__delete"> Delete </button>

      </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string,
  emojiText: PropTypes.string,
  deleteCallback: PropTypes.func
};

export default Card;
