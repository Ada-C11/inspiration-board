import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const API_URL = 'https://inspiration-board.herokuapp.com/boards';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    axios.get(API_URL)
    .then ((response) => {
      const cards = response.data.map((card) => {
        
      })
    })
  }

  render() {
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
