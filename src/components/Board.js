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
    };
  }

  componentDidMount = () => {
    const cards = [];
    axios.get(`${this.props.url}/${this.props.boardName}/cards`)
    .then((response) => {
      // console.log(response.data);
      response.data.forEach((element) => {
        cards.push(element['card']);
      })

      this.setState({cards,});
    })
    .catch((error) => {

    })
  }


  updateCardList = (card) => {
    const allCards = this.state.cards;
    allCards.push(card);
    this.setState(allCards);
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
    const cardIndex = cards.findIndex((card) => card.id === cardId);
    cards.splice(cardIndex, 1);
    this.setState({cards, });
  }

  render() {
    return (
      <div>
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
