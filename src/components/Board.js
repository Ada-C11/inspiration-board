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

        const cards = response.data.map(card => {

          let allCards = this.state.cards;

          return (
            allCards.push(card)
          );
        })

        this.setState({
          // cards: cards
          cards
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
    return (
      <div>
        Board

        <div>
          <Card text={this.state.cardText} />
        </div>
        <div>
          <Card text={this.state.cardText} />
        </div>
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
