import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      message: ''
    };
  }

  componentDidMount() {
    this.setState({
      message: 'Loading Cards'
    });

    this.getCards();

    axios
      .get(`${this.props.url}${this.props.boardName}/cards`)
      .then(response => {
        const cards = [];
        response.data.forEach(card => {
          cards.push({
            text: card.card.text,
            emoji: card.card.emoji,
            id: card.card.id
          });
        });
        this.setState({
          cards,
          message: ''
        });
      })
      .catch(response => {
        this.setState({
          message: `Problem! ${response.data}`
        });
      });
  }

  getCards = () => {
    return this.state.cards.map((card, i) => {
      return (
        <Card
          key={i}
          text={card.text}
          emoji={card.emoji}
          deleteCardCallback={this.deleteCard}
          id={card.id}
        />
      );
    });
  };

  rendEachError = (errField, errorArray) => {
    const errList = errorArray.map((message, index) => {
      return <li key={`${errField}-${index}`}>{message}</li>;
    });
    return (
      <div>
        <strong>{errField}:</strong>
        <ul className="validation-errors-display__list">{errList}</ul>
      </div>
    );
  };

  showErrors = responseData => {
    if (responseData['errors']) {
      const foundErrors = responseData['errors'];
      const errorList = Object.keys(foundErrors).map(errField => {
        return (
          <div key={`${errField}`}>
            {this.renderEachError(errField, foundErrors[errField])}
          </div>
        );
      });
      return <div>{errorList}</div>;
    } else {
      return <div />;
    }
  };

  deleteCard = cardId => {
    const cards = this.state.cards.filter(
      card => card.id !== parseInt(cardId, 10)
    );
    this.setState({
      cards
    });
    axios
      .delete(`${this.props.url}${this.props.boardName}/cards/${cardId}`)
      .then(() => {
        this.setState({
          message: 'Card successfully deleted'
        });
      })
      .catch(() => {
        this.setState({
          message: 'Card deletion failed'
        });
      });
  };

  addCard = card => {
    axios
      .post(`${this.props.url}${this.props.boardName}/cards`, card)
      .then(response => {
        console.log(response);
        card.id = response.data.card.id;

        this.setState({
          cards
        });
      })
      .catch(error => {
        console.log(error);

        const message = (
          <div>
            <p>Something has gone wrong:</p>
            {this.renderValidationErrors(error.response.data)}
          </div>
        );
        this.setState({
          message
        });
      });
    const cards = this.state.cards;
    cards.push(card);

    this.setState({
      cards,
      mode: 'DISPLAY'
    });
  };

  hideCard = () => {
    this.setState({
      mode: 'DISPLAY'
    });
  };
  displayMessage = () => {
    if (this.state.message === '') {
      return <div />;
    }
    return (
      <div>
        <h3>{this.state.message}</h3>
      </div>
    );
  };

  render() {
    return (
      <div>
        <section className="validation-errors-display">
          {this.state.message}
        </section>

        <NewCardForm
          addCardCallback={this.addCard}
          hideFormCallback={this.hideCard}
        />

        <main className="board">{this.getCards()}</main>
      </div>
    );
  }
}

Board.propTypes = {
  boardName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Board;
