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
      cards: CARD_DATA['cards'],
    };
  }

  updateCardList = (card) => {
    console.log(card);
    const allCards = this.state.cards;
    allCards.push(card);
    this.setState(allCards);
  }

  renderCards = () => {
    console.log(this.state.cards);
    const displayedCards = this.state.cards.map((card, i) => {
      console.log(`text: ${card.text ? card.text : ''}`);
      console.log(`emoji: ${card.emoji ? card.emoji : ''}`);
      return (
        <Card 
          key={i} 
          cardMessage={card.text ? card.text : ''} 
          cardEmoji={card.emoji ? card.emoji : ''}
        />
      )
    })
    return displayedCards;
  }

  render() {
    return (
      <div className="board">
        {this.renderCards()}
        <NewCardForm updateCardListCallback={this.updateCardList}/> 
      </div>
    )
  }
}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
