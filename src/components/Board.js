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
      url: this.props.url,
      boardName: this.props.boardName,
      cards: [],
      errorMessage: null,
    };
  }

  componentDidMount() {
   
    axios.get(`${this.state.url}/${this.state.boardName}/cards`)
    
      .then((response) => {
        console.log(response)
        this.setState({
          cards: response['data']
        })
      })

      .catch((error)=> {

        this.setState({
          errorMessage: error.message
        })
      })

  }

  onDeleteCardCallback = (cardId) => {

    axios.delete(` https://inspiration-board.herokuapp.com/cards/${cardId}`)
    .then((response) => {
    
      const newCardsList = this.state.cards.filter(card => card.card.id !== cardId)
      this.setState({
        cards: newCardsList
      })

    })
    .catch((error) => {
      this.setState({
        errorMessage: error.message
      })
    })
    

  }

  onAddCardCallback = (card) => {

    axios.post(`${this.state.url}/${this.state.boardName}/cards`,card)
    .then((response)=>{
      console.log(response)
      let updatedCardList = this.state.cards
      updatedCardList.unshift(response.data)

      this.setState({
        cards: updatedCardList
      })

    })
    .catch((error)=>{
      this.setState({
        errorMessage: error.message
      })
    })

  }


  render() {
    let cards = this.state.cards.map((card)=>{
      return(
        <Card key={card.card.id} id={card.card.id} text={card.card.text} emoji={card.card.emoji} onDeleteCardCallback={this.onDeleteCardCallback} />)
  })
  
    return (
      <div className="board">
        <NewCardForm onAddCardCallback={this.onAddCardCallback}/>
        {cards}
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string,
  boardName: PropTypes.string,
};

export default Board;
