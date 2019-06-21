import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';


class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
    const { url, boardName } = this.props;
    this.cardsEndpoint = url + boardName + '/cards';
  }

  componentDidMount() {
    axios.get(this.cardsEndpoint)
      .then((response) => {
        const cardsList = response.data.map((card, i) => {
          let newCard = card.card;
          return <Card
            key={i}
            text={newCard.text}
            emoji={newCard.emoji}
            id = {newCard.id}
            deleteCardCallback = {this.deleteCard}
          />
        });
        this.setState({cards: cardsList});
      })
      .catch((error) => {
        console.log(error);
      })
  }

  addCard = (card) => {
    const newCard = <Card 
      {...card}
      key = {card.id}
      deleteCardCallback = {this.deleteCard}
    />

    const newCards = [newCard, ...this.state.cards]

    this.setState({cards: newCards});
  }

  deleteCard = (cardID) => {
    const deleteEndpoint = 'https://inspiration-board.herokuapp.com/cards/' + cardID;
    axios.delete(deleteEndpoint)
    .then((response) => {
      console.log(`Card ${cardID} successfully deleted`)
      })
    .catch((error) => {
      console.log(error);
    });

    const cards = this.state.cards;
    const cardIndex = cards.findIndex((card) => {
      return card.props.id === cardID;
    });

    cards.splice(cardIndex, 1);

    this.setState(cards);
  }

  render() {
    return (
      <div>
        <div className='cardform-container'>
          <NewCardForm 
            cardsEndpoint = {this.cardsEndpoint}
            addCardCallback = {this.addCard}
          />
      </div>
        <div className='card-container'>
          {this.state.cards}
        </div>
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
