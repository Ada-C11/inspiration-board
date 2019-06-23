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
    return (
      <div>
        <header>Board</header>
        <Card quote="Here is an inspirational quote!" Emoji="beer"/>
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
