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
      cards: [],
    };

  }

  componentDidMount() {

    const cardList = CARD_DATA.cards.map((card) => {
      const newCard = {
        text: card.text,
        emoji: card.emoji
      }

      return newCard;
    })

    this.setState({ cards: cardList });
  }


  render() {
    console.log(this.state.cards);
    const cards = this.state.cards.map((card, i) => {

      return (
        <li key={i}>
          <Card quote={card.text} emoji={card.emoji} />
        </li>
      );
    });


    return (
      <div>
        Board
        {cards}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
