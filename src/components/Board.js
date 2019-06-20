import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [
        "Good Job!", 
        "You're awesome!",
        "You Matter!",
        "Take a Deep Breath and let the stress melt away"
      ],
    };
  }

  
  render() {
    const mappedCards = this.state.cards.map((card, i) => {
      return <Card 
        key={i}
        individualCard={card}
      />
    });

    return(
      <div>
        {mappedCards}
      </div>
    );
  }

}

Board.propTypes = {
  
};

export default Board;
