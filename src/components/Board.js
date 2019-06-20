import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import emoji from 'emoji-dictionary'

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

  cardDisplay = CARD_DATA.cards.map((card, i) => {
    if (card.Emoji) {
      card.emoji = card.Emoji
    }
    return (
      <Card 
      key={i}
      cardText={card.text}
      cardEmoji={card.emoji} />
    )
  })

  render() {
    return (
      <div>
        {this.cardDisplay}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
