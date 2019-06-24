import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
  }
 

  render() {
    let cards = this.state.cards.map((card, i) => {
      return (
          <Card key={ i } id={card.card.id} text={card.card.text} emoji={card.card.emoji} />
      )
    })

  return (
    <div className="board">
      {cards};
    </div>
  )};
}

Board.propTypes = {
  url: PropTypes.string,
  boardName: PropTypes.string,
};

export default Board;
