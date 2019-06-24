import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const BOARD_API_URL = 'https://inspiration-board.herokuapp.com/';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    axios.get(BOARD_API_URL + 'boards/' + this.props.boardName + '/cards')
      .then((response) => { 
        const cardList = response.data.map((card) => {
          console.log(card)
          const newCard = {
            ...card.card,
            text: card.card.text==null ? "" : card.card.text,
            emoji: card.card.emoji==null ? "" : card.card.emoji
          }
          console.log(newCard)
          return newCard;
        })

        this.setState({
          cards: cardList
        })
        console.log(cardList)
      })
      
      .catch((error) => {
        console.log(error);
      })
  }

  onDeleteClick = (cardId) => {
    const newCardList = this.state.cards.filter((card) => card.id !== cardId);

    this.setState({
      cards: newCardList
    });

    axios.delete(BOARD_API_URL + 'cards/' + cardId )
      .then((response) => {
        console.log(response);
      })

      .catch((error) => {
        console.log(error);
      })
  }

  addQuote = (quote) => {
    axios.post(BOARD_API_URL + 'boards/' + this.props.boardName + '/cards', quote)
      .then((response) => { 
        console.log(response);
        let updatedData = this.state.cards;
        updatedData.push(quote);
        this.setState({cards: updatedData})
      })
      
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    const cardList = this.state.cards.map((card, index) => {
      const { id, text, emoji } = card;
      return ( <section>
                <Card
                id={id}
                key={index}
                text={text}
                emoji={emoji}
                onDeleteClick={this.onDeleteClick}
                />
              </section>
      );
    })

    return (
      <div>
        {cardList}
        <NewCardForm 
        addQuoteCallback={this.addQuote}
        />
      </div> 
    )
  }

}

Board.propTypes = {

};

export default Board;
