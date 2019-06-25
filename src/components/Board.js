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

  componentDidMount(){

     axios.get(`${this.props.url}${this.props.boardName}`+"/cards")
     .then((response)=>{
       const cards = response.data.map((cardObj)=>{
         const newCard = {
           ...cardObj.card,
         };
         return newCard;
       }).filter((card, index)=> index < 5);
       this.setState({
         cards:cards,
       });
     })
     .catch((error)=>{
       this.setState({
         errorMessage: error.message,
       });
     });
  }

  render() {
    const cardList = this.state.cards.map((card)=>{
      return <Card
        key={card.id}
        text={card.text}
        emoji={card.emoji}
      />
    });

    return (
      <div>
        <ul className="board">
           {cardList}
        </ul>
      </div>
    )
  }

}

Board.propTypes = {
  cards: PropTypes.array,
};

export default Board;
