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
      cards: CARD_DATA['cards'],
    };
  }

  updateCardList = (card) => {
    const allCards = this.state.cards;
    allCards.push(card);
    this.setState(allCards);
  }

  renderCards = () => {
    const displayedCards = this.state.cards.map((card, i) => {
      return (
        <Card 
          key={i} 
          cardMessage={card.text ? card.text : ''} 
          cardEmoji={card.emoji ? card.emoji : ''}
        />
      )
    });
    return displayedCards;
  }

  render() {
    return (
      <div className="board">
        <NewCardForm updateCardListCallback={this.updateCardList}/> 
        {this.renderCards()}
      </div>
    )
  }
}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
