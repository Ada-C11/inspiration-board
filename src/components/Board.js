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
      cards: CARD_DATA['cards'],
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

  updateCardList = (cardData) => {
    axios.post(`${this.props.url}${this.props.boardName}/cards`, cardData)
    .then((response) => {
      const cards = this.state.cards;
      const card = response.data['card'];
      cards.push({
        id: card.id,
        text: card.text,
        emoji: card.emoji,
      });
      this.setState({ cards, });
    })
    .catch((error) => {
      const errorList = this.state.errorMessage;
      const newError = error.response.data.errors.text;
      newError.forEach((text) => {
        errorList.push(text);
      })
      this.setState({ errorMessage: errorList });
    })
  }

  renderCards = () => {
    const displayedCards = this.state.cards.map((card) => {
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
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${cardId}`)
    .then((response) => {
      const cardIndex = cards.findIndex((card) => card.id === cardId);
      cards.splice(cardIndex, 1);
      this.setState({cards, });
    })
    .catch((error) => {
      const errorList = this.state.errorMessage;
      const newError = error.response.data.errors.text;
      newError.forEach((text) => {
        errorList.push(text);
      });
      this.setState({ errorMessage: errorList });
    })

    
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
