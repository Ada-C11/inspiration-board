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
    const endpoint = this.props.url + this.props.boardName + "/cards"
    axios.get(endpoint)
      .then((response) => {
        console.log(response.data);

        const cardList = response.data.map((card) => {
          
          const newCard = { 
            key: card.card.id,
            id: card.card.id,
            quote: card.card.text,
            Emoji: card.card.emoji
          }
          return newCard
        })

        console.log(cardList);

        this.setState({cards: cardList});
      
      })
      
      .catch((error) => {
        console.log(error);
      })
  }

  onDeleteCard = (cardId) => {
    const endpoint = this.props.url + "cards/" + cardId
    
    axios.delete(endpoint)
    .then((response) => {
      const newCardList = this.state.cards.filter(card => card.id !== cardId);
      this.setState({cards: newCardList});
      console.log(response.data);
    })

    .catch((error) => {
      console.log(error);
    })
  }

  onAddCard = (card) => {
    const endpoint = this.props.url + this.props.boardName + '/cards'
    
    axios.post(endpoint, {text: card.quote, emoji: card.Emoji})
    .then((response) => {
      const newCardList = this.state.cards
      newCardList.push(card)

      this.setState({cards: newCardList});
      console.log(response.data);
    })

    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    const display = this.state.cards.map((card) => {
      const { id, quote, Emoji} = card;
      return (<section>
        <Card 
          id={id}
          quote={quote} 
          Emoji={Emoji} 
          onDeleteCard={this.onDeleteCard} 
        />
      </section>);
    });

    return (
      <div className="board">
        <NewCardForm onAddCard={this.onAddCard}/>
        {display}
      </div>
    );     
  }
}

Board.propTypes = {

};

export default Board;
