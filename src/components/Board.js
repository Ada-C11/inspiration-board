import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

class Board extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = { cards: [] };
  }

  componentDidMount = () => {
    this.getCards();
  };

  getCards() {
    const { url, boardName } = this.props;
    axios
      .get(url.concat(boardName).concat('/cards'))
      .then(response => {
        const cardsState = response.data.map(card => {
          return { text: card.card.text, emojiName: card.card.emoji };
        });
        this.setState({ cards: cardsState });
      })
      .catch(error => {});
  }

  cardCollection = () => {
    return this.state.cards.map((card, i) => {
      return <Card {...card} key={i} />;
    });
  };

  render() {
    return (
      <div>
        <section>
          <NewCardForm />
        </section>
        <section>{this.cardCollection()}</section>
      </div>
    );
  }
}

Board.propTypes = {};

export default Board;
