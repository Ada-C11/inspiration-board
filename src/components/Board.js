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
      errorMessages: ""
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
            id: card.card.id
          }
          return newCard;
        })

        this.setState({ cards });

      })
      .catch((error) => {
        this.setState({ errorMessages: error.message });
      });
  }


  addCardCallback = (cardInfo) => {
    const fullUrl = this.props.url + this.props.boardName + "/cards"
    axios.post(fullUrl, cardInfo)
      .then((response) => {
        const card = response.data["card"]
        let updatedData = this.state.cards;
        updatedData.push({
          id: card.id,
          text: cardInfo.text,
          emoji: cardInfo.emoji
        });
        this.setState({ cards: updatedData })
      })
      .catch((error) => {
        this.setState({ errorMessages: error.message });
      });
  }

  deleteCardCallback = (id) => {
    const updatedCards = this.state.cards.filter((card) => card.id !== id)

    this.setState({
      cards: updatedCards
    });

    const fullUrl = `https://inspiration-board.herokuapp.com/cards/${id}`
    axios.delete(fullUrl)
      .then((response) => {

      })
      .catch((error) => {
        this.setState({ errorMessages: error.message });
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

    const errors = <div className="validation-errors-display">Error: {this.state.errorMessages}</div>
    return (
      <div className="board">
        {this.state.errorMessages ? errors : ""}
        <NewCardForm addCardCallback={this.addCardCallback} />
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
