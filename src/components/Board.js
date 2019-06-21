import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const BOARD_API_URL = 'https://inspiration-board.herokuapp.com'

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }
  // componentDidMount() {
  //   const newCardState = CARD_DATA.cards.map
  // }
  generateCardComponents = () => {
    console.log(this.state.cards)
    return this.state.cards.map((card, i) => {
      console.log(card)
      return (<Card
        key={i}
        text={card.text}
        emoji={card.emoji}
      />
      )

    });
  }

  componentDidMount() {
    axios.get(BOARD_API_URL + '/boards/sarah-scotton/cards')
      .then((response) => {
        // this.setState({ cards: response.data })
        const newCards = response.data.map((item) => {
          return {
            text: item.card.text,
            emoji: item.card.emoji
          }
        })
        this.setState({ cards: newCards })
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const cardComponents = this.generateCardComponents()
    return (
      <div className="board">
        {cardComponents}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
