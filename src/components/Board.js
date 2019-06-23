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
      errorMessage: null,

    };
  }

  componentDidMount() {
    const localUrl = this.props.url + this.props.boardName + "/cards"
    console.log(localUrl);
    // is this needed and why?
    // const cards = this.state.cards
    axios.get(localUrl)
      .then((response) => {
        console.log("in axios!");
        console.log(response.data)
        this.setState({ 
          cards: response.data,
        })
        
        // const cards = response.data.map((card, i) => {

          // if (card["text"]) {
          //   console.log(card["text"])
          // }
          // console.log("*********")
          // if (card.text) {
          //   console.log(card.text)
          // }
          // console.log(response.data);
          // card.emoji ? card.emoji.toLowerCase() : null,
          // if (card["emoji"])
          //  && pet.breed && pet.about) {
          //   return [{
          //     ...pet,
          //     species: pet.breed.toLowerCase()
          //   }];
          // } else {
          //   return [];
          // }
  
        // this.setState({ pets: response.data });
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message });
      });
  }

  render() {
    const cardComponents = this.state.cards.map( (cardObject, i) => {
     return (
       <div key={i}>
         { console.log(cardObject.card)}
         {/* need to have it accept card["emoji"] as well */}
         <Card card={cardObject.card} />
       </div>
     )
   });
    return (
      <div>
        { cardComponents }
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
