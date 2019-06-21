import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const BOARD_API_URL = 'https://inspiration-board.herokuapp.com/';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: CARD_DATA,
    };
  }

  render() {
    const cardList = this.state.cards.cards.map((card, index) => {
      const { text, emoji } = card;
      return ( <section>
                <Card
                key={index}
                text={text}
                emoji={emoji}
                />
              </section>
      );
    })
    console.log(this.state.cards.cards)
    return (
      <div>
        {cardList}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
