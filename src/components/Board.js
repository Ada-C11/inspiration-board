import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const API_URL = 'https://inspiration-board.herokuapp.com/boards/carla-bosco/cards';
const DELETE_URL = 'https://inspiration-board.herokuapp.com/cards/'

class Board extends Component {
  
   constructor(props) {
     super(props)

     this.state = {
      cards: [],
    };
   }

  componentDidMount() {
    axios.get(API_URL)
    .then ((response) => {
      this.setState({cards: response.data})
    })
    .catch((error) => {
      console.log(error)
    })
  }

  deleteCard = (cardID) => {
    axios.delete(DELETE_URL + cardID)
    .then((response) => {
      const updatedCards = this.state.cards.filter(card => card.id !== cardID);
      this.setState({cards: updatedCards})
    })
    .catch((error) => {
      console.log(error)
    })
  }

  addCard = (inputData) => {
    axios.post(API_URL, inputData)
    .then((response) => {
      let updatedData = this.state.cards
      updatedData.push(inputData)
      this.setState({cards: updatedData})
    })
    .catch((error) => {
      this.setState({error: error.message})
    })
  }

  render() {
    const cardCollection = this.state.cards.map((cardsArray, index) => {
      return <Card key={index}
        card={cardsArray.card}
        deleteCallback={this.deleteCard}
        />
    });

    return (
      <div className="board">
        <NewCardForm
          addCardCallback={this.addCard}
        />
       {cardCollection}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;