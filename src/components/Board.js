import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

CARD_DATA['cards'].forEach((card, i) => {
  card['id'] = i;
})

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      errorMessage: [],
    };
  }

  componentDidMount = () => {
    const cards = [];
    axios.get(`${this.props.url}/${this.props.boardName}/cards`)
    .then((response) => {
      response.data.forEach((element) => {
        cards.push(element['card']);
      })

      this.setState({cards,});
    })
    .catch((error) => {
      const errorMessage = error.message;
      this.setState({errorMessage,})
    })
  }

  displayErrorMessage = () => {
    const messages = this.state.errorMessage.map((e, i) => {
      return(
        <li key={i}>{e}</li>
      )
    })
    return messages;
  }

  updateCardList = (card) => {
    const cardData = {
      id: card.id,
      text: card.text,
      emoji: card.emoji,
    }

    axios.post(`${this.props.url}${this.props.boardName}/cards`, cardData)
    .then((response) => {
      let cards = this.state.cards;
      cards.push({
        text: card.text,
        emoji: card.emoji,
      });
      this.setState({ cards, });
    })
    .catch((error) => {
      const errorMessage = error.message;
      this.setState({errorMessage,});
    })
  }

  renderCards = () => {
    const displayedCards = this.state.cards.map((card) => {
      // console.log(card.id);
      return (
        <Card 
          key={card.id}
          cardId={card.id}
          removeCardCallback={this.removeCard}
          cardMessage={card.text ? card.text : ''} 
          cardEmoji={card.emoji ? card.emoji : ''}
        />
      )
    });
    return displayedCards;
  }

  removeCard = (cardId) => {
    const cards = this.state.cards;
    const cardIndex = cards.findIndex((card) => card.id === cardId);
    cards.splice(cardIndex, 1);
    this.setState({cards, });
  }

  render() {
    return (
      <div>
        <div className="validation-errors-display">
          <ul className="validation-errors-display__list">
            {this.displayErrorMessage()}
          </ul>
        </div>
        <NewCardForm updateCardListCallback={this.updateCardList}/>
        <div className="board">
          {this.renderCards()}
        </div>
      </div>
    )
  }
}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
