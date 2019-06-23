import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {

  const { text, cardEmoji, deleteCardCallback, id} = props;

  const onClickDelete = () => {
    return deleteCardCallback(id)
  }

    return (
      <div className="card card__content">
        <button
          type="button"
          className="card__delete"
          onClick={onClickDelete}
        >
          Delete Card
        </button>
        <p className="card__content-text">{text}</p>
        <p className="card__content-emoji">{cardEmoji ? emoji.getUnicode(cardEmoji) : ""}</p>
      </div>
    )
}


Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  id: PropTypes.number,
  deleteCardCallback: PropTypes.func.isRequired
};

export default Card;
