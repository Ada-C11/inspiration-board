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

    CARD_DATA["cards"].forEach((card, i) => {
      card.id = i;
    })

    this.state = {
      cards: [],
      error: null,
    }
  }

  componentDidMount() {
    axios.get(this.props.url + 'boards/' + this.props.boardName + '/cards')
      .then((response) => {
        console.log(response.data)
        const cards = response.data.map((card) => {
          const newCard = {
            id: card.card.id,
            text: card.card.text,
            emoji: card.card.emoji
          }
          return newCard;
        })
        this.setState({ cards });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      })
  }

  onDeleteCard = (cardId) => {
    const newCardList = this.state.cards.filter(card => card.id !== cardId);
    this.setState({
      cards: newCardList
    });

    axios.delete(this.props.url + 'cards/' + cardId)
      .then((response) => {
        console.log(`Deleted card ${response.data.card.id}`)
      })
      .catch((error) => {
        this.setState({ error: error.message });
      })
  }

  addCardCallback = (card) => {
    axios.post(this.props.url + 'boards/' + this.props.boardName + '/cards', card)
      .then((response) => {
        this.setState({
          cards: [...this.state.cards, response.data.card]
        });
      })
      .catch((error) => {
        this.setState({error: error.message});
      });
  }

  render() {
    const cardComponents = this.state.cards.map((card, index) => {
    
    return (
      <Card
        key={index}
        id={card.id}
        text={card.text}
        emoji={card.emoji}
        onDeleteCard={this.onDeleteCard}
      />
      );
    });

  return (
    <div className="board">
      {cardComponents}
      <NewCardForm addCardCallback={this.addCardCallback} />
    </div>)
  }
}

Board.propTypes = {
  url: PropTypes.string, 
  boardName: PropTypes.string
};

export default Board;
