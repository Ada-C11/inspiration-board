import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import axios from 'axios';

import './Card.css';

const Card = (props) => {

  const onClickDelete = () => {
    this.props.deleteCardCallback(this.props.id);
  } 

  return (
    //.card__delete somewhere
    <div className="card">
      <p onClick={ onClickDelete } className='card__delete'>x</p>
      <div className='card__content'>
        <p className='card__content-text'>{props.text}</p>
        <p className='card__content-emoji'>{emoji.getUnicode(props.emoji)}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  emoji: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  deleteCardCallback: PropTypes.func.isRequired
};

export default Card;
