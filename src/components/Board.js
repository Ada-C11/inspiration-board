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

    const allCards = this.state.cards.map((card, i) => {
      return (
        <section key={i}>
          <Card
            index={i}
            text={card.text}
            emoji={card.emoji}
           />
        </section>
      );
    });

    return (
      <div>
        {allCards}
      </div>
    );

  }

}

Board.propTypes = {

};

export default Board;
