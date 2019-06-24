import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
//import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };

    this.deleteCardCallback = this.deleteCardCallback.bind(this);
  }

  componentDidMount() {
    this.getCards();
  }

  getCards() {
    const url = this.props.url + this.props.boardName + '/cards';
    axios.get(url).then((response) => {
      this.setState({
        cards: response.data.map((card) => card.card)
      });
    });
  }

  deleteCardCallback(cardId) {
    // remove card from the board
    const index = this.state.cards.findIndex(
      card => card.id === cardId);
    const cards = this.state.cards;
    cards.splice(index, 1);
    this.setState({
      cards: cards
    })

    // deleted from API
    const url = " https://inspiration-board.herokuapp.com/cards/" + cardId
    axios.delete(url)
  }

  render() {
    let cards = this.state.cards.map(card => <Card
        id = {card.id}
        text = {card.text}
        emoji = {card.emoji}
        deleteCallback = {this.deleteCardCallback}
      />);

    return (
      <div>
        Chantal's Board
        {/* displays the cards on the board */}
        <div className="board">
          {cards}
        </div>
      </div>
    )
  }
}

Board.propTypes = {

};

export default Board;
