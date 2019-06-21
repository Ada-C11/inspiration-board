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
      errorMessage: null,
    };
  };

  componentDidMount() {
    axios.get(`${this.props.url}${this.props.boardName}/cards`)
      .then((response) => {

        console.log(response.data);
        const cardsFromApi = response.data.map(cardWrapper => {
    
            return {
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

  deleteCard = () => {

  }

  render() {

    const allCards = this.state.cards.map((card, i) => {
      return (
        <section key={i}>
          <Card
            index={i}
            text={card.text}
            emoji={card.emoji}
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
