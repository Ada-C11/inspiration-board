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

  render() {
    let cards = this.state.cards.map(card => <Card
        text = {card.text}
        emoji = {card.emoji}
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
