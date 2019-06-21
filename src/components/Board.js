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
      cardText: 'hello!',
      errorMessage: null
    };
  }

  componentDidMount() {
    axios.get(this.props.url + this.props.boardName + '/cards')
      .then((response) => {
        console.log("Here is my response!!!!!!!!!!", response);

        // const cards = response.data.map(card => {

        //   let allCards = this.state.cards;

        //   return (
        //     allCards.push(card)
        //   );
        // })

        this.setState({
          cards: response.data
        })

      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message
        })
      })
    console.log('here are all your cards!!!!!', this.state.cards)

  }



  // allIndividualCards = this.state.cards
  //map through all of these cards and include JSX. Put them below where card components are.



  render() {
   


    const showCard = this.state.cards.map((card, i) => {
      return (
        <div className='card' key={i}>
          <Card
           id={card.card.id}
           text={card.card.text}
           emoji={card.card.emoji}
           />
        </div>
      );
    })
    return (
      <div>
        Board

        <div className='board'>
          {showCard}
        </div>
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
