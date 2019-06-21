import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';
// import { isExpressionWrapper, throwStatement } from '@babel/types';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      error: null
    };
  }

  componentDidMount() {
    const {url, boardName } = this.props;
    axios.get(`${url}boards/${boardName}/cards`)
      .then((response) => {
        console.log('In .then!!!!');

        const allCards = response.data.map(element => {
          const card = {
            ...element.card,
          }
          return card;
        });

        this.setState({
          cards: allCards,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message
        });
      })
  }

  deleteCard = (id) => {
    console.log(id);
    
    const updatedCards = this.state.cards.filter((card) => card.id !== id);

    this.setState({
      cards: updatedCards,
    });

    axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
    .then((response) => {
      console.log('ID of card deleted:', response.data.card.id);
    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
    });
  }

  addCard = (card) => {
    const { url, boardName } = this.props;
  
    const newCardData = {
      text: card.text,
      emoji: card.emoji,
    };

    axios.post(`${url}boards/${boardName}/cards`, newCardData)
    .then((response) => {

      console.log("This is what response.data looks like from the API on a successful response", response.data);

      let updatedCards = this.state.cards;

      updatedCards.unshift({
        id: response.data.card.id,
        text: card.text,
        emoji: card.emoji,
      });

      this.setState({
        cards: updatedCards,
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message,
      });
    });
  }

  render() {
    const allCards = this.state.cards.map((card, i) => {
      return <Card 
        key={i}
        {...card}
        onDeleteCard={this.deleteCard}
      />
    });

    return(
      <div className="board">
        <NewCardForm 
          addCardCallback={this.addCard} 
        />
        
        {allCards}

      </div>
    );
  }
}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
