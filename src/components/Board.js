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
      cards: CARD_DATA.cards,
    };
  }
  // componentDidMount() {
  //   const newCardState = CARD_DATA.cards.map
  // }
  generateCardComponents = () => {
    console.log(this.state.cards)
    return this.state.cards.map((card, i) => {
      console.log(card.text)
      return (<Card
        key={i}
        text={card.text}
        emoji={card.emoji}
      />
      )

    });
  }


  render() {
    const cardComponents = this.generateCardComponents()
    return (
      <div>
        {cardComponents}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
