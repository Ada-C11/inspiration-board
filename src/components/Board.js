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
      // cardText: 'hello!',
      errorMessage: null
    };
  }

  componentDidMount() {
    axios.get(this.props.url + this.props.boardName + '/cards')
      .then((response) => {
     
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

  onDeleteCard = (cardId) => {

    axios.delete(`https://inspiration-board.herokuapp.com/cards/${cardId}`)

    axios.get(this.props.url + this.props.boardName + '/cards')
    .then((response) => {
   
      const newCardList = this.state.cards.filter(card => card.card.id !== cardId);

      this.setState({
        cards: newCardList
      })

    })
    .catch((error) => {
      this.setState({
        errorMessage: error.message
      })
    })
    
  }


  render() {

    const { cards, cardText, errorMessage } = this.state;

    const showCard = cards.map((card, i) => {
      return (
        <div className='card' key={i}>
          <Card
            index={i}
            id={card.card.id}
            text={card.card.text}
            emoji={card.card.emoji}
            onDeleteCardCallback={this.onDeleteCard}
          />
        </div>
      );
    })
    return (
      <div className='board'>
        {showCard}
      </div>

    )
  }

}

Board.propTypes = {

};

export default Board;
