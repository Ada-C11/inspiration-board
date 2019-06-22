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
    }
  }

  componentDidMount() {
    axios.get(this.props.url + this.props.boardName + '/cards')
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

  render() {
    const cardComponents = this.state.cards.map((card, index) => {
    
    return (
      <Card
        key={index}
        text={card.text}
        emoji={card.emoji}
      />
      );
    });

  return (
    <div className="board">
      {cardComponents}
    </div>)
  }
}

Board.propTypes = {
  url: PropTypes.string, 
  boardName: PropTypes.string
};

export default Board;
