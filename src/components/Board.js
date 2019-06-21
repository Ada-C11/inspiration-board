import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cardList: [],
      currentCard: undefined,
    };
  }
  
  ourURL = (this.props.url)+(this.props.boardName)+"/cards"
  
  componentDidMount() {
    axios.get(this.ourURL)
    .then((response) => {
      console.log(response.data);

      const cardList = response.data.map((card) => {
        const newCard = {
          id: card.card.id,
          text: card.card.text,
          emoji: card.card.emoji
        }
        return newCard;
      })
  
      console.log(cardList);
  
      this.setState({ cardList });
    })
    .catch((error) => {
      this.setState({ error: error.message })
    })
  }

  onDeleteCard = (cardID) => {
    axios.delete(this.props.delURL+cardID)
    .then((response) => {
      console.log(response)
      const newCardList = this.state.cardList.filter(card => card.id !== cardID);
  
      this.setState({ cardList: newCardList })
    })
    .catch((error) => {
      this.setState({ error: error.message })
    })
  }

  addCardCallback = (card) => {
    axios.post(this.ourURL, card)
    .then((response) => {
      console.log(response)
      card.id = response.data.card.id;
      console.log(card);

      const newCards = [card, ...this.state.cardList];
      this.setState({ cardList: newCards })
    })
    .catch((error) => {
      this.setState({ error: error.message })
    })
  }
  
  render() {
    const displayCards = this.state.cardList.map((card, i) => {
      return <Card 
                key={i}
                id={card.id}
                text={card.text}
                emoji={card.emoji}
                onDeleteCard={this.onDeleteCard}
              />
    })

    return (
      <div>
        <article className="new-card-form">
          <NewCardForm addCardCallback={this.addCardCallback} />
        </article>
        <article className="board">
          { displayCards }
        </article>
      </div>
    )
  }
}

Board.propTypes = {
  url: PropTypes.string,
  boardName: PropTypes.string
};

export default Board;
