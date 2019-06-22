import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = { cards: [] };
  }

  componentDidMount = () => {
    this.getCards();
  };

  getCards = () => {
    const { url, boardName } = this.props;
    axios
      .get(url.concat(boardName).concat('/cards'))
      .then(response => {
        const cardsState = response.data.map(card => {
          return { text: card.card.text, emoji: card.card.emoji };
        });
        this.setState({ cards: cardsState.reverse() });
      })
      .catch(error => {
        console.log(error.response.data);
        this.setState({ errorMessages: error.response.data.cause });
      });
  };

  postCards = cardPostParams => {
    const { url, boardName } = this.props;
    axios
      .post(url.concat(boardName).concat('/cards'), cardPostParams)
      .then(response => {
        const cardsState = this.state.cards;
        cardsState.unshift(cardPostParams);
        this.setState(cardsState);
      })
      .catch(error => {
        if (error.response.data.cause) {
          console.log(error.response.data);
          this.setState({ errorMessages: error.response.data.cause });
        }
      });
  };

  cardCollection = () => {
    return this.state.cards.map((card, i) => {
      return <Card {...card} key={i} />;
    });
  };

  render() {
    return (
      <div className="board">
        <section>
          <NewCardForm postCardCallback={this.postCards} />
        </section>
        <section className="board-card-container__display ">
          {this.cardCollection()}
        </section>
      </div>
    );
  }
}

Board.propTypes = {};

export default Board;
