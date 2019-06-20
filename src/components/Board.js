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


  componentDidMount() {
    this.importCards()
  }

  importCards = () => {
    CARD_DATA["cards"].forEach((card) => {
      this.state.cards.push(card)
      const newCards = this.state.cards
      this.setState({cards: newCards})
    })
  }


  render() {
    console.log(this.state.cards)
    return (
      <div>
        Board
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
