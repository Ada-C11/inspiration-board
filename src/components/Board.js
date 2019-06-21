import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {

  const { url, boardName, cardList, onRemoveCallback } = props
  // console.log(cardLisst);

  const renderCards = cardList.map( (card, i) => {
    return (
      <div key={i}>
        <Card 
          card={card} 
          onRemoveCallback={onRemoveCallback}
        />
      </div>
    );
  });

  return (
    <Fragment>
      <section className='validations-error-display'>

      </section>
      <section className='board'>
        {renderCards}
      </section>
    </Fragment>
  )
}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
  cardList: PropTypes.array.isRequired,
  onRemoveCallback: PropTypes.func.isRequired,
};

export default Board;
