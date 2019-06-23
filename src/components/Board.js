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
      cardList: [],
      error: ""
    };
  }
  

  componentDidMount() {
    axios.get(`${this.props.url}${this.props.boardName}/cards`)
      .then((response) => {
        const cardlist = response.data.map((card) => {
          const newCard = {
            ...card,
          }
          return newCard
        })
        console.log(cardlist)
        this.setState({
          cardList: cardlist,
        });
      })
      .catch((error) => {
        console.log(error);
        alert('Error happened');
        this.setState({ error: error.message });
      });
  }
  onDeleteCard = (cardId) => {
    const newCardList = this.state.cardList.filter(card => card["card"].id !== cardId)
    console.log(newCardList)
    this.setState({
      cardList: newCardList,
    })
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${cardId}`)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
        alert('Error happened');
        this.setState({ error: error.message });
      })
  }
  addCardCallback = (card) => {
    const cardIds = this.state.cardList.map(item => item.card.id)

    this.setState({
      cardList: [...this.state.cardList, { card:{...card, id: Math.max(...cardIds) + 1 }}]
    });
    axios.post(`${this.props.url}${this.props.boardName}/cards`, {text: card.text, emoji: card.emoji})
    .then((response) => {
      console.log(response)
    })
    .catch((error)=> {
      console.log(error)
      alert('Error happened');
      this.setState({ error });
    })
  }






  render() {
    const cardcollection = this.state.cardList.map((card, i) => {
      return ([
        <Card
          key={i}
          id={card["card"].id}
          text={card["card"].text}
          emoji={card["card"].emoji}
          onDeleteCard={this.onDeleteCard}
        />]
      )
    })
    return (
      <div>
        <header classname="validation-errors-display">
          {this.state.error}
        </header>
        <div classname="board">
          {cardcollection}
        </div>
        <div>
          <NewCardForm addCardCallback={this.addCardCallback}/>
        </div>
      </div>
    )
  }

}

Board.propTypes = {
  // cardList: PropTypes.array.isRequired,
  onDeleteCard: PropTypes.func,
  addCardCallback: PropTypes.func

};

export default Board;
