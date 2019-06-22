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

  allCards = CARD_DATA.cards.map((card, i) => {
    // let message = card.text;
    // if (!message){message = ''};
    return <Card
      key={i}
      text={card.text}
      // text={message}
      emoji={card.emoji}
    />
  });

  // setState({
  //   this.state.cards: allCards
  // )};

  render() {
    return (
      <div>
        Board
        {this.allCards}

      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
