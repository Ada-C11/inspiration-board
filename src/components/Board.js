import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import emoji from 'emoji-dictionary';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      // cards: CARD_DATA,
      cards: []
    };
  }

  renderBoard() {
    axios.get(`${this.props.url}${this.props.boardName}/cards`)
    .then((response) => {
      console.log(response.data); 
      this.setState({cards: response.data});
      console.log(this.state.cards);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount() {
    this.renderBoard();
  }

  renderCards(data) {
    console.log(data);
    return data ? data.map((elem, i) => (
      <Card key={i} text={elem.card.text ? elem.card.text : ''} emoji={elem.card.emoji ? emoji.getUnicode(elem.card.emoji) : ''}/>
    )) : ''
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
