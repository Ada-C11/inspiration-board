import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
              id: card.card.id,
            }
          })
          this.setState({
            cards: newCards,
          });
        })
        .catch((error) => {
          this.setState({
            errorMessage: `${error.message} when retrieving cards.`,
          });
        });
  }

  deleteCardCallback = (cardId) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${cardId}`)
      .then((response) => {
        const newList = this.state.cards.filter(card => card.card.id !== cardId);
        this.setState({
          cards: newList,
        });
      })
      .catch((error) => {
        this.setState({
          errorMessage: `${error.message} when deleting card`,
        });
      });
  }

  addCardCallback = (cardInfo) => {
    const { url, boardName } = this.props;
    axios.post((url + boardName + "/cards"), cardInfo)
      .then((response) => {
        const newCard = { ...response.data.card }
        const currentCards = this.state.cards;
        currentCards.push(newCard);

        this.setState({
          cards: currentCards,
        });
      })
      .catch((error) => {
        this.setState({
          errorMessage: `${error.message} when adding a card.`,
        });
      });
  }

  render() {
    const cards = this.state.cards.map((card, i) => {
      return (
        <Card 
          key={i} 
          id={card.id} 
          text={card.text} 
          cardEmoji={card.emoji} 
          deleteCardCallback={this.deleteCardCallback}
        />
      );
    })

  return (
    <section>
    <div className="validation-errors-display validation-errors-display__list">    
       {this.state.errorMessage}
    </div>
    <div className="board">
      <NewCardForm addCardCallback={this.addCardCallback} />
    </div>
    <div className="board">
      {cards}
    </div>
    </section>
  )};
}

Board.propTypes = {
  url: PropTypes.string,
  boardName: PropTypes.string,
};

export default Board;
