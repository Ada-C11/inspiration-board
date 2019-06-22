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

    this.state = CARD_DATA;
  }

  cardCollection = () => {
    console.log(CARD_DATA);
    return this.state.cards.map((card, i) => {
      return <Card {...card} key={i} />;
    });
  };

  render() {
    return (
      <div>
        <section>
          <NewCardForm />
        </section>
        <section>{this.cardCollection()}</section>
      </div>
    );
  }
}

Board.propTypes = {};

export default Board;
