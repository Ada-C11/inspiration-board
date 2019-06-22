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
        const cards = response.data.map((card) => {
          const newCard = {
            text: card.card.text,
            emoji: card.card.emoji,
          }
          return newCard;
        })

        this.setState({ cards });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  addCardCallback = (cardInfo) => {
    const fullUrl = this.props.url + this.props.boardName + "/cards"
    axios.post(fullUrl, cardInfo)
    .then((response) => {
      let updatedData = this.state.cards;
      updatedData.push(cardInfo);
      this.setState({cards: updatedData})
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  deleteCardCallback = (cardID) => {
    const fullUrl = "https://inspiration-board.herokuapp.com/cards/:" + {cardID}
    axios.delete(fullUrl)
    .then((response) => {

    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }




  render() {
    const showCards = this.state.cards.map((card, index) => {
      return (<Card
        key={index}
        text={card.text}
        emoji={card.emoji}
        id={card.id}
        deleteCardCallback={this.deleteCardCallback}
      />)
    })


    return (
      <div className="board">
        <NewCardForm addCardCallback={this.addCardCallback}/>
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
