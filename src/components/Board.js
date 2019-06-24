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
    const allCards = CARD_DATA.map((card, i) => {
      return <div key={i}><Card text={card.text} emoji={card.emoji}/></div>
    });

    return (
      <div>
        {allCards}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
