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

    CARD_DATA["cards"].forEach((card, i) => {
      card.id = i;
    })

    this.state = {
      cards: [],
    }
  }

  componentDidMount() {
    const cards = CARD_DATA["cards"].map((card) => {
      const newCard = {
        id: card.id,
        text: card.text,
        emoji: card.emoji
      }
      return newCard;
    })
    this.setState({ cards });
  }

  render() {
    const cardComponents = this.state.cards.map((card, index) => {
    
    return (
      <Card
        key={index}
        text={card.text}
        emoji={card.emoji}
      />
      );
    });

  return (
    <div className="board">
      {cardComponents}
    </div>)
  }
}

Board.propTypes = {
  url: PropTypes.string
};

export default Board;
