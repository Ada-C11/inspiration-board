import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
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
  render() {
    return (
      <div>
        <Card text="hello"/>
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

};

export default Board;
