import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {

  const { card, onRemoveCallback } = props

  const onClickRemoveCard = () => {
    onRemoveCallback(card.id)
  }

  return (
    <div className="card">
      <div onClick={onClickRemoveCard}className="card__delete">x</div>
      
      <div className='card__content'>
        <p className='card__content-text'>{card.text}</p>
        {card.emoji ? <p className='card__content-emoji'>{emoji.getUnicode(card.emoji)}</p> : null }
      </div>
    </div>
  );
};

Card.propTypes = {
  // update to array of objects
  cards: PropTypes.array.isRequired,
  onRemoveCallback: PropTypes.func.isRequired,
};

export default Card;
