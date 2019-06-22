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

  generateCardComponents = () => {
    return this.state.cards.map((card, i) => {
      return (<Card
        key={i}
        index={i}
        id={card.id}
        text={card.text}
        emoji={card.emoji}
        removeCardCallback={this.removeCard}
      />
      )
    });
  }

  componentDidMount() {
    console.log("insideComponentDidMount")
    axios.get(this.props.url + this.props.boardName + '/cards')
      .then((response) => {
        const newCards = response.data.map((item) => {
          return {
            text: item.card.text,
            emoji: item.card.emoji,
            id: item.card.id
          }
        })
        this.setState({ cards: newCards })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  addCard = (card) => {

    axios.post(this.props.url + this.props.boardName + '/cards', card)
      .then((response) => {
        console.log(response.data.card.id)
        card.id = response.data.card.id
        console.log(card)
        const newCards = this.state.cards
        console.log("New state", newCards)
        newCards.push(card)
        console.log("New state 2", newCards)
        this.setState({
          cards: newCards
        })

      })
      .catch((error) => {
        console.log(error)
      })


  }

  removeCard = (cardIndex, cardID) => {

    axios.delete(BOARD_API_URL + '/cards/' + cardID)
      .then((response) => {
        const newCards = this.state.cards;
        newCards.splice(cardIndex, 1);
        this.setState({ cards: newCards })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const cardComponents = this.generateCardComponents()
    return (
      <div>
        <div className="board">
          {cardComponents}

        </div>
        <NewCardForm addCardCallback={this.addCard} />
      </div >
    )
  }

}

Board.propTypes = {

};

export default Board;
