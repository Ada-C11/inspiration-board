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

  cardComponents = CARD_DATA.cards.map((card, i) => {
    card.text = card.text ? card.text : "";
    card.emoji = card.emoji ? card.emoji : "octopus";
    return (
      <Card 
        key={i}
        text={card.text}
        emoji={card.emoji} />
    )
  })

  render() {
    return (
      <div>
        {this.cardComponents}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
