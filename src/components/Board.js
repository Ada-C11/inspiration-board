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
    const GET_CARDS_URL = "https://inspiration-board.herokuapp.com/boards/PhDPlayerHatersDegree/cards"

    axios.get(GET_CARDS_URL)
      .then((response) => {
        this.setState({ cards: response.data });
        console.log(response.data)
        console.log(this.state.cards)
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }


  render() {
    let display;

    const cardComponents = this.state.cards.map((data, index) => {
      const { text, emoji, id } = data.card;
      return (
        <Card
          key={index}
          id={id}
          text={text}
          emoji={emoji}
        />
      )
    });

    if (this.state.error) {
      display = this.state.error.forEach((error) => {
        return <p>{error.message}</p>
      })
    } else {
      display = cardComponents;
    }

    // const errorMessage = this.state.errors.forEach((error) => {
    //   return <p>{error.message}</p>
    // })

    return (
      <div className="board">
        {display}
        {/* {errorMessage} */}

      </div>
    )
  }
}

Board.propTypes = {
  boardName: PropTypes.string.isRequired,
  cards: PropTypes.array,
};

export default Board;
