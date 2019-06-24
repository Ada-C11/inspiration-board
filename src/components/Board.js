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
    console.log(props);
  }

  componentDidMount = () => {
    this.getCards();
  };

  getCards = () => {
    const { url, boardName } = this.props;
    axios
      .get(url.concat(boardName).concat('/cards'))
      .then(response => {
        const cardsState = response.data.map(cardObject => {
          return cardObject.card;
        });
        this.setState({ cards: cardsState.reverse() });
      })
      .catch(error => {
        console.log(error.response.data);
        this.setState({ errorMessages: error.response.data.cause });
      });
  };

  postCard = cardPostParams => {
    const { url, boardName } = this.props;
    axios
      .post(url.concat(boardName).concat('/cards'), cardPostParams)
      .then(response => {
        const cardsState = this.state.cards;
        cardsState.unshift(response.data.card);
        this.setState(cardsState);
      })
      .catch(error => {
        if (error.response.data.cause) {
          console.log(error.response.data);
          this.setState({ errorMessages: error.response.data.cause });
        }
      });
  };

  deleteCard = cardId => {
    const { base } = this.props;
    axios
      .delete(base.concat('cards/').concat(cardId.toString()))
      .then(response => {
        const cardsState = this.state.cards.filter(card => {
          return card.id !== cardId;
        });
        this.setState({ cards: cardsState });
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
      return <Card {...card} key={i} deleteCardCallback={this.deleteCard} />;
    });
  };

  render() {
    return (
      <div className="board">
        <section>
          <NewCardForm postCardCallback={this.postCard} />
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
