import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

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
    console.log("inside generate card components")
    return this.state.cards.map((card, i) => {
      console.log("this is the card")
      console.log(card)
      return (<Card
        key={i}
        index={i}
        text={card.text}
        emoji={card.emoji}
        removeCardCallback={this.removeCard}
      />
      )

    });
  }

  componentDidMount() {
    console.log("insideComponentDidMount")
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
        // console.log(response.data)
      })
      .catch((error) => {
        // console.log(error)
      })
  }

  removeCard = (cardIndex) => {
    console.log("inside removeCard");
    console.log(cardIndex);
    const newCards = this.state.cards;
    console.log(newCards.length);
    // console.log(this.state.cards)
    const card = newCards.splice(cardIndex, 1);
    console.log(card)
    console.log(newCards.length);

    this.setState({
      cards: newCards
    })
  }

  render() {
    const cardComponents = this.generateCardComponents()
    console.log(cardComponents)
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
