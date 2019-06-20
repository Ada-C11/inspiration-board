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
      cards: [
        'Ore wa kaizoku ou ni naru!'
      ],
    };
  }

  componentDidMount() {
    axios.get('')
    .then((response) => {

    })
    .catch((error) => {

    });
  }

  render() {
    const boardCards = this.state.cards.map((card, index) => {
      return <Card key={index} card={card} />
    })

    return (
      <div>
        {boardCards}
      </div>
    )
  }

}

Board.propTypes = {
  boardName: PropTypes.string.isRequired,
};

export default Board;
