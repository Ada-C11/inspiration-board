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
      // cards: [],
      cards: CARD_DATA.cards,
    };
  }

  render() {
    const cardComponents = this.state.cards.map((card, i) => {
      return (
        <div key={i}>
          <Card 
            text={card.text}
            cardEmoji={card.emoji} />
        </div>
      )
    });

    return (
      <div>
        {cardComponents}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
