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
      error: "",
      cards: [],
    };
  }

  renderCards = () => {
    if (this.state.cards) {
      const cards = this.state.cards.map(card => 
        <Card 
          key={card.card.id}
          id={card.card.id}
          text={card.card.text} 
          emoji={card.card.emoji}
          deleteCardCallback={this.deleteCard}
        />);
      return cards; 
    }
  }

  getCards = () => {
    axios.get(`${this.props.url}${this.props.boardName}/cards`)
    .then((response) => {
      this.setState({ cards: response.data });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }
  componentDidMount() {
    this.getCards();
  }

  deleteCard = (cardId) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${cardId}`)
    .then((response) => {
      this.getCards();
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  render() {
    return (
      <div className="board">
        {this.renderCards()}
      </div>
    )
  }

}

Board.propTypes = {
  name: PropTypes.string,
};

export default Board;
