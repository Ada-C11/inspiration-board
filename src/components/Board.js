import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';
import emoji from 'emoji-dictionary';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: CARD_DATA,
    };
  }

  componentDidMount() {
    axios.get(`https://inspiration-board.herokuapp.com/boards/kan_test_board/cards`)
  .then(function (response) {
    console.log(response); 
  })
  .catch(function (error) {
    console.log(error);    
  });
  }

  renderCards(data) {
    return data.cards.map((card, i) => (
      <Card key={i} text={card.text ? card.text : ''} emoji={card.emoji ? emoji.getUnicode(card.emoji) : ''}/>
    ))
  }

  render() {
    return (
      <div>
        {this.renderCards(this.state.cards)}
      </div>
    )
  }

}

// const cardForms = this.state.cards.map((card, i) => {
//   return (
//     <Card
//       key={i}
//       id={card.card.id}
//       text={card.card.text}
//       cardEmoji={card.card.emoji}
//       deleteCardCallback={this.deleteCardCallback}
//     />
//   )
// });

Board.propTypes = {
  cards: PropTypes.object
};

export default Board;
