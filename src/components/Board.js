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
    const display = CARD_DATA.cards.map((card) => {
      const { text, Emoji} = card;
      return (<section>
        <Card quote={text} Emoji={Emoji} />
      </section>);
    });

    return (
      <div className="board">
        {display}
      </div>
    );     
  }
}

Board.propTypes = {

};

export default Board;
