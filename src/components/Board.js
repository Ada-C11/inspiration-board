import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import emoji from 'emoji-dictionary'

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      errorMessage: null
    };
  }

  componentDidMount() {
    axios.get(this.props.url + this.props.boardName + '/cards')
    .then((response) => {
      const APICards = response.data.map((cardWrapper) => {
        return (
          cardWrapper.card
        )
      })

      this.setState({
        cards: APICards
      })
    })
    .catch((error) => {
      this.setState({
        errorMessage: error.message
      })
    })
  }

  onDeleteCard = (id) => {
    const updatedCards = this.state.cards.filter((card) => card.id !== id)

    this.setState({
      cards: updatedCards
    })

    axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
    .then((response) => {
      console.log('ID of card deleted:', response.data.card.id)
    })
    .catch((error) => {
      this.setState({
        errorMessage: error.message
      })
    })
  }

  addCard = (newCard) => {
    // Axios post call
    // console.log('newCard: ', newCard)

    // console.log('in addCard. here is card object', newCard)
    axios.post(`https://inspiration-board.herokuapp.com/boards/${this.props.boardName}/cards`, newCard)
    .then((response) => {
      const newCardList = this.state.cards
      newCardList.push(newCard)
    
      this.setState({
        cards: newCardList
      })
    })
    .catch((error) => {
      this.setState({errorMessage: error.message})
    })

  }

  render() {
    const cardDisplay = this.state.cards.map((card, i) => {

        return (
         <Card 
          key={i}
          {...card}
          onDeleteCard={this.onDeleteCard} />
        )
      })

    const showError =  <div className='red__error'>Error Message: {this.state.errorMessage}</div>

    return (
      <div className='board'>
        {this.state.errorMessage ? showError : cardDisplay}
        <NewCardForm addCardCallback={this.addCard}/>
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string,
  boardName: PropTypes.string
};

export default Board;
