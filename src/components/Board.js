import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './Board.css';
import Card from './Card';


const Board = (props) => {

  const { cardList, onRemoveCallback } = props

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
    // I realize this isn't the best use case for a fragment. I just really wanted
    // to test out using one. :) 
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
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
    text: PropTypes.string,
    emoji: PropTypes.string,
  })).isRequired,
  onRemoveCallback: PropTypes.func.isRequired,
};

export default Board;
