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
  // update to array of objects
  cardList: PropTypes.array.isRequired,
  onRemoveCallback: PropTypes.func.isRequired,
};

export default Board;
