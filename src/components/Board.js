import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const GET_CARDS_URL = "https://inspiration-board.herokuapp.com/boards/PhDPlayerHatersDegree/cards";


class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    axios.get(GET_CARDS_URL)
      .then((response) => {
        this.setState({ cards: response.data });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }


  deleteCard = (cardID) => {
    const DELETE_URL = "https://inspiration-board.herokuapp.com/cards/" + cardID;
    console.log(cardID)

    axios.delete(DELETE_URL)
      .then(() => {
        const updatedCards = this.state.cards.filter(card => card.id !== cardID)

        this.setState({ cards: updatedCards });
        window.location.reload();
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }


  render() {
    // let display;

    const displayCards = this.state.cards.map((data, index) => {
      const { text, emoji, id } = data.card;
      return <Card
        key={index}
        id={id}
        text={text}
        emoji={emoji}
        deleteCard={this.deleteCard}
      />
    });

    // if (this.state.error) {
    //   display = this.state.error.map((error) => {
    //     return <p>{error.message}</p>
    //   })
    // } else {
    //   display = cardComponents;
    // }

    return (
      <div className="board">
        {displayCards}
      </div>
    )
  }
}

Board.propTypes = {
  boardName: PropTypes.string.isRequired,
  cards: PropTypes.array,
};

export default Board;
