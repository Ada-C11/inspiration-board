import React, { Component } from 'react';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    this.getCards();
  }

  getCards = () => {
    axios.get('https://inspiration-board.herokuapp.com/boards/jessica/cards')
    .then((response) => {
      console.log("In .then!");

      const cardsFM = response.data.flatMap(card => {
          return [{ ...card }];
      });

      this.setState({ cards: cardsFM });

      console.log(this.state.cards)

    })
    .catch((error) => {
      console.log("In .catch!");

      this.setState({
        errorMessage: error.message
      })
    })
  }

  deleteCard = (id) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
    .then((response) => {
      console.log("In .then!");
      const newCards = this.state.cards
      newCards.forEach((card, i) => {
        if(card.card.id === id) {
          newCards.splice(i, 1);
        }
      });
    
      this.setState({ cards: newCards });

      console.log(this.state.cards)

    })
    .catch((error) => {
      console.log("In .catch!");

      this.setState({
        errorMessage: error.message
      })
    })
  }

  addCard = (card) => {
    const cardIds = this.state.cards.map(card => card.id)

    this.setState({
      cards: [...this.state.cards, {...card, id: Math.max(...cardIds) + 1}]
    });
  }

  cardComponents = () => {
    const components = this.state.cards.map((card, i) => {
      if(card.card) {
        card = card.card;
      }
      console.log(card)

      card.text = card.text ? card.text : "";
      card.emoji = card.emoji ? card.emoji : "octopus";
      return (
        <Card 
          key={i}
          id={card.id}
          text={card.text}
          emoji={card.emoji}
          deleteCardCallback={this.deleteCard} />
      )
    })
    return components
  } 

  render() {
    return (
      <div>
        <NewCardForm 
          addCardCallback={this.addCard}/>
        {this.cardComponents()}
      </div>
    )
  }

}

export default Board;
