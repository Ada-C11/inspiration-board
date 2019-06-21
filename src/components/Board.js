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

  render() {
    const cardComponents = CARD_DATA["cards"].map((card, index) => {
      const { text, emoji } = card;
      return (
        <Card
          key={index}
          text={text}
          emoji={emoji}
        />
      )
    });
    return (
      <div className="board">
        {cardComponents}
      </div>
    )
  }
}

Board.propTypes = {
  boardName: PropTypes.string.isRequired
};

export default Board;
