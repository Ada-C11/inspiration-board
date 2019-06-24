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
      boardUrl: this.props.url,
      cardUrl: this.props.url + this.props.boardName
    };
  }
  

  componentDidMount() {
    axios.get(this.state.cardUrl + '/' + 'cards')
    .then((response) => {

      this.setState({
        cards: response.data});
    })
    .catch((error) => {
      this.setState({error:error.message});
    })
  }

  onDeleteCard = (cardId) => {

    const newCardList = this.state.cards.filter(cardObject => cardObject.card.id !== cardId)

    this.setState({
      cards: newCardList
    })

    axios.delete(`https://inspiration-board.herokuapp.com/cards/:${cardId}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    .catch((error) => {
      this.setState({error:error.message});
    })

  }

  addCardCallback = (card) => {
    axios.post()
    console.log()
  }
  render() {

    const cards = this.state.cards.map((cardObject,i) => { 
      return [<Card
          id = {cardObject.card.id}
          text = {cardObject.card.text}
          symbol = {cardObject.card.emoji}
          onDeleteCard={this.onDeleteCard}
          />];
    });

    const errorSection = (this.state.error) ?
    (<section className="validation-errors-display">
      Error: {this.state.error}
    </section>) : null;


    return (
      <div className="board">
        {errorSection}
        
          <NewCardForm addCardCallback={this.addCardCallback}/>
          {cards}
       
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
