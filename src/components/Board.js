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
    };
  }

  componentDidMount() {
    const { url, boardName } = this.props;
    const cardsEndpoint = url + boardName + '/cards';

    axios.get(cardsEndpoint)
      .then((response) => {
        const cardsList = response.data.map((card, i) => {
          let newCard = card.card;
          return <Card
            key={i}
            text={newCard.text}
            emoji={newCard.emoji}
            id = {newCard.id}
            deleteCardCallback = {this.deleteCard}
          />
        });
        this.setState({cards: cardsList});
      })

      .catch((error) => {
        console.log(error);
      })
  }


  deleteCard = (cardID) => {
    const deleteEndpoint = 'https://inspiration-board.herokuapp.com/cards/' + cardID;

    axios.delete(deleteEndpoint)
    .then((response) => {
      console.log(`Card ${cardID} successfully deleted`)
      });
  

    // .catch((error) => {
    //   console.log(error);
    // });


    const cards = this.state.cards;
    const cardIndex = cards.findIndex((card) => {
      return card.props.id === cardID;
    });

    cards.splice(cardIndex, 1);

    this.setState(cards);
  }

  render() {
    return (
      <div>
        <div>
          Board
          <NewCardForm />
      </div>
        <div className='card-container'>
          {this.state.cards}
        </div>
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  board: PropTypes.string.isRequired
};

export default Board;
