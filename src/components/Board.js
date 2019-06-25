import React, { Component } from 'react';
import axios from 'axios';
import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

class Board extends Component {
  constructor() {
    super();

    this.state = { cards: [] };
  }

  componentDidMount() {
    this.getCards();
  }

  getCards = () => {
    axios.get('https://inspiration-board.herokuapp.com/boards/jessica/cards')
    .then((response) => {
      const cardsFM = response.data.flatMap(card => { return [{ ...card }] });

      this.setState({ cards: cardsFM });
    })
    .catch((error) => {
      this.setState({ errorMessage: error.message });
    })
  }

  deleteCard = (id) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
    .then((response) => {
      const newCards = this.state.cards;

      newCards.forEach((card, i) => {
        if(card.card.id === id) newCards.splice(i, 1);
      });
    
      this.setState({ cards: newCards });
    })
    .catch((error) => {
      this.setState({ errorMessage: error.message });
    })
  }

  addCard = (card) => {
    const cardIds = this.state.cards.map(card => card.id);
    const newId = Math.max(...cardIds) + 1;
    this.setState({
      cards: [{...card, id: newId}, ...this.state.cards]
    });
  }

  cardComponents = () => {
    const components = this.state.cards.map(card => {
      if(card.card) { card = card.card }

      card.text = card.text ? card.text : "";
      card.emoji = card.emoji ? card.emoji : "";

      return (
        <Card 
          key={card.id}
          id={card.id}
          text={card.text}
          emoji={card.emoji}
          deleteCardCallback={this.deleteCard} />
      )
    })

    return components;
  } 

  render() {
    return (
      <div className="board">
        <NewCardForm 
          addCardCallback={this.addCard} />

        {this.cardComponents()}
      </div>
    )
  }
}

export default Board;
