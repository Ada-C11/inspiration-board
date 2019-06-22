import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const BASE_URL = "https://inspiration-board.herokuapp.com/boards/PhDPlayerHatersDegree/cards";


class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      error: null,
    };
  }

  componentDidMount() {
    axios.get(BASE_URL)
      .then((response) => {
        this.setState({ cards: response.data });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  addCardCallback = (card) => {
    console.log(card)
    axios.post(BASE_URL, card)
      .then((response) => {
        const updatedCards = this.state.cards;
        updatedCards.push(response.data);
        this.setState({ cards: updatedCards });

      })
      .catch((error) => {
        this.setState({ error: error.message });
      })
  }

  deleteCard = (cardID) => {
    const DELETE_URL = "https://inspiration-board.herokuapp.com/cards/" + cardID;

    axios.delete(DELETE_URL)
      .then(() => {
        const updatedCards = this.state.cards.filter(card => card.id !== cardID)

        this.setState({ cards: updatedCards });

        window.location.reload();
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  render() {

    const displayCards = this.state.cards.map((data) => {
      const { id, text, emoji } = data.card;
      return <Card
        key={id}
        id={id}
        text={text}
        emoji={emoji}
        deleteCard={this.deleteCard}
      />
    });

    const displayErrors = (this.state.error) ? (<div className="validation-errors-display">Whoops!<ul className="validation-errors-display__list"><li>{this.state.error}</li></ul></div>) : null;

    return (
      <section>
        <div className="board" >
          {displayCards}
        </div>
        <div className="form-container">
          {displayErrors}
          < NewCardForm addCardCallback={this.addCardCallback} />
        </div>
      </section>
    )
  }
}

Board.propTypes = {
  boardName: PropTypes.string.isRequired,
  cards: PropTypes.array,
};

export default Board;
