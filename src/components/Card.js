import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';

const Card = (props) => {

  const onClickDelete = () => {
    props.deleteCardCallback(props.id);
  } 

  return (
    <div className="card">
      <div className="card__content">
        <p className="card__content-text">{ props.text }</p>
        <p className="card__content-emoji">{ emoji.getUnicode(props.emoji) }</p>
      </div>
      <p onClick={ onClickDelete } className="card__delete">x</p>
    </div>
  )
}

Card.propTypes = {
  emoji: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  deleteCardCallback: PropTypes.func.isRequired,
};

export default Card;
