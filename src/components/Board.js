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
          const newCard = {
            ...card,
            // console.log(newCard.card)
          }
          // console.log(newCard)
          return newCard.card;
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

    // const newCardList = this.state.cards.filter(card => card.id !== cardId);

    // this.setState({
    //   cards: newCardList
    // });

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
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
