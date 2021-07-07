import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    axios.get(`${this.props.url}boards/${this.props.boardName}/cards`)
      .then((response) => {
        this.setState({ cards: response.data });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  deleteCardCallback = (cardID) => {
    axios.delete(`${this.props.url}cards/${cardID}`)
    .then((prevState) => {
      const newBoard = prevState.cards.flatMap(card => {
        if (card.card.id !== cardID) {
          return card
        }
        return []
      })

      this.setState({ cards: newBoard });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  render() {
    const allCards = this.state.cards.map((card, i) => {
      return <div key={i}><Card id={card.card.id} text={card.card.text} emoji={card.card.emoji} deleteCardCallback={this.deleteCardCallback}/></div>
    });

    return (
      <div>
        {allCards}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
