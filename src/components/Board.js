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
      cards: CARD_DATA["cards"],
    };
  }

  render() {

    const boardCards = this.state.cards.map(
      ({ text, emoji }) => {
  
      return <Card
                text = {text}
                emoji = {emoji} />;
  
    })

    return (
      <div>
        { boardCards }
      </div>
    )
  }
};

Board.propTypes = {

};

export default Board;
