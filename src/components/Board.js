import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      errorMessage: null,
    };
  };

  componentDidMount() {
    axios.get(`${this.props.url}${this.props.boardName}/cards`)
      .then((response) => {

        console.log(response.data);
        const cardsFromApi = response.data.map(cardWrapper => {
    
            return {
              id: cardWrapper.card.id,
              text: cardWrapper.card.text,
              emoji: cardWrapper.card.emoji
            };
        });

        this.setState({ cards: cardsFromApi });
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message
        })
      })
  };

  deleteCard = (cardId) => {
    // axios.delete(`https://inspiration-board.herokuapp.com/cards/${}`)
    // .then((response) => {
    //   // What should we do when we know the delete request worked?
    // })
    // .catch((error) => {
    //   // What should we do when we know the delete request failed?
    // });
    console.log("i am in Board.js and this is the card id", cardId)
  };

  render() {
    const allCards = this.state.cards.map((card, i) => {
      return (
        <section key={i}>
          <Card
            {...card}
            deleteCardCallback={this.deleteCard}
           />
        </section>
      );
    });

    let errorMessages = '';
    if (this.state.errorMessages) {
      errorMessages = this.state.errorMessage.map((message) => {
        return (
          <li >
            {message}
          </li>
        )
      }) 
    };

    return (
      <main className="board">
        
        <section className="validation-errors-display">
          <ul className="validation-errors-display__list">
            {errorMessages}
          </ul>
        </section>

        <div>
          {allCards}
        </div>

      </main>
    );

  }

}

Board.propTypes = {

};

export default Board;
