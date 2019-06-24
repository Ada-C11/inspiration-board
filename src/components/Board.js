import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  
  componentDidMount() {
    axios.get('https://inspiration-board.herokuapp.com/boards/Ada-Lovelace/cards')
    .then((response) => {

      this.setState({
        cards: response.data});
    })
    .catch((error) => {
      this.setState({error:error.message});
    })
  }

  onDeleteCard = (cardId) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/:${cardId}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }

  render() {

    const cards = this.state.cards.map((cardObject,i) => { 
      return [<Card
          id = {i}
          text = {cardObject.card.text}
          symbol = {cardObject.card.emoji}
          onDeleteCard={this.onDeleteCard}
          />];
    });

    const errorSection = (this.state.error) ?
    (<section>
      Error: {this.state.error}
    </section>) : null;


    return (
      <div>
       {errorSection}
       {cards}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
