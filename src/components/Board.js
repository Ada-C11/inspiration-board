import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      errorMessage: null,
    };
  }

  componentDidMount() {
    axios.get(`${this.props.url}/${this.props.boardName}/cards`)
      .then((response) => {
        this.setState({ cards: response.data });
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message
        })
      })
  }

  addCardCallback = (card) => {
    const cardData = {
      text: card.text,
      emoji: card.cardEmoji,
    };
    axios.post(`${this.props.url}/${this.props.boardName}/cards`, cardData)
      .then((response) => {
        let updatedCards = this.state.cards;
        updatedCards.unshift({
          card: {
            text: card.text,
            id: card.id,
            emoji: card.cardEmoji,
          }
        });
        this.setState({
          cards: updatedCards
        });
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message,
        });
      });
  }

  deleteCardCallback = (cardId) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${cardId}`)
      .then((response) => {
        const newCardList = this.state.cards.filter(card => card.card.id !== cardId);

        this.setState({
          cards: newCardList
        });
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message,
        });
      });
  }

  render() {

    const errorSection = (this.state.errorMessage) ?
      (<section className="validation-errors-display">
        Error: {this.state.errorMessage}
      </section>) : null;


    const cardComponents = this.state.cards.map((card, i) => {
      return (
        <Card
          key={i}
          id={card.card.id}
          text={card.card.text}
          cardEmoji={card.card.emoji}
          deleteCardCallback={this.deleteCardCallback}
        />
      )
    });

    return (
      <section>
        <div>
          {errorSection}
        </div>
        <div >
          <NewCardForm addCardCallback={this.addCardCallback} />
        </div>
        <div className="board">
          {cardComponents}
        </div>
      </section>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired

};

export default Board;
