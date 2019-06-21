import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';
import { pseudoRandomBytes } from 'crypto';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    const fullUrl = this.props.url + this.props.boardName + "/cards"
    axios.get(fullUrl)
      .then((response) => {
        console.log(response.data)
        const cards = response.data.map((card) => {
          const newCard = {
            quote: card.card.text,
            emoji: card.card.emoji,
          }
          return newCard;
        })

        console.log(cards)
        this.setState({ cards });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }




  render() {
    console.log(this.state.cards)
    const showCards = this.state.cards.map((card, index) => {
      return (<Card
        key={index}
        quote={card.quote}
        emoji={card.emoji}
      />)
    })


    return (
      <div className="board">
        {showCards}
      </div>
    )
  };
}


Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
