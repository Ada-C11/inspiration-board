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
      requestMessage: null
    };
  }

  componentDidMount() {
    axios.get(this.props.url + this.props.boardName + "/cards")
    .then((response) => {
      const cards = response.data.map((card, i) => {
        return card.card
      });

      this.setState({
        cards,
      });
    })

    .catch((error) => {
      this.setState({
        requestMessage: error.message
      })
    });
  }

  handleDelete = (card) => {

    axios.delete("https://inspiration-board.herokuapp.com/cards/" + card.id)
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            requestMessage: "Card has been deleted!"
          });
        }
        const newCardList = this.state.cards.filter(currentCard => currentCard.id !== card.id);
        this.setState({
          cards: newCardList
        });
      })
      .catch((error) => {
        this.setState({requestMessage: error.message});
      })
    
  }

  render() {
    const allCards = this.state.cards.flatMap((card, i) => {
      return <Card
                key={i}
                id={card.id}
                text={card.text}
                emojiText={card.Emoji? card.Emoji : card.emoji}
                deleteCallback={this.handleDelete}
                />
    });

    return (
      <main>
        {this.state.requestMessage}
        {allCards}
      </main>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
