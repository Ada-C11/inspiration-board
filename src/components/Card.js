import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {  
  const { id, text, cardEmoji, deleteCardCallback } = props;

  const getEmoji = () => {
    return cardEmoji && emoji.getUnicode(cardEmoji);
  }

  const deleteCardClick = () => {
    deleteCardCallback(id);
  }

  return (
    <section className="card">
      <section className="card__content">
        <p className="card__content-text">{text}</p>
        <p className="card__content-emoji">{getEmoji()}</p>
      </section>
        <div className="card__delete" onClick={deleteCardClick}>X</div>
    </section>
  )
}

Card.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteCardCallback: PropTypes.func.isRequired,
};

export default Card;
