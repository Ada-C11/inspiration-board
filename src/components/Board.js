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
      url: this.props.url,
      boardName: this.props.boardName,
      cards: [],
      errorMessage: null,
    };
  }
 
  componentDidMount() {
    const { url, boardName } = this.props;
      axios.get(url + boardName + "/cards")
        .then((response) => {
          const newCards = response.data.map((card) => {
            return {
              text: card.card.text,
              emoji: card.card.emoji,
              id: card.card_id,
            }
          })
          this.setState({
            cards: newCards,
            errorMessage: null,
          });
        })
        .catch((error) => {
          this.setState({
            errorMessage: error.message,
          });
        });
  }

  postCard = (cardInfo) => {
    const { url, boardName } = this.props;
    const theURL = url + boardName + "/cards";
    axios.post(theURL, cardInfo)
      .then((response) => {
        const newCard = { ...response.data.card }
        const updatedCards = this.state.cards;
        updatedCards.push(newCard);

        this.setState({
          cards: updatedCards,
          errorMessage: null,
        });
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.response.data.errors.text,
        });
      });
  }

  render() {
    const cards = this.state.cards.map((card, i) => {
      return (
          <Card key={ i } id={card.id} text={card.text} emoji={card.emoji} />
      );
    })

  return (
    <section>
    <div className="validation-errors-display validation-errors-display__list">    
       {this.state.errorMessage}
    </div>
    <div className="board">
      {cards};
    </div>
    </section>
  )};
}

Board.propTypes = {
  url: PropTypes.string,
  boardName: PropTypes.string,
};

export default Board;
