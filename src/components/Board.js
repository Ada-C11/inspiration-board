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
    axios.get('https://inspiration-board.herokuapp.com/boards/jessica/cards')
    .then((response) => {
      console.log("In .then!");

      const cardsFM = response.data.flatMap(card => {
        // if (card.name && card.breed && card.about) {
          return [{
            ...card
            // species: pet.breed.toLowerCase()
          }];
        // } else {
        //   return [];
        // }
      });

      this.setState({ cards: cardsFM });

      console.log(this.state.cards)

    })
    .catch((error) => {
      console.log("In .catch!");

      this.setState({
        errorMessage: error.message
      })
    })
  }

  // cardComponents = CARD_DATA.cards.map((card, i) => {
  //   // console.log(this)
  //   card.text = card.text ? card.text : "";
  //   card.emoji = card.emoji ? card.emoji : "octopus";
  //   return (
  //     <Card 
  //       key={i}
  //       text={card.text}
  //       emoji={card.emoji} />
  //   )
  // })

  cardComponents = () => {
    const components = this.state.cards.map((card, i) => {
      card.card.text = card.card.text ? card.card.text : "";
      card.card.emoji = card.card.emoji ? card.card.emoji : "octopus";
      return (
        <Card 
          key={i}
          text={card.card.text}
          emoji={card.card.emoji} />
      )
    })
    return components
  } 

  render() {
    return (
      <div>
        {this.cardComponents()}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
