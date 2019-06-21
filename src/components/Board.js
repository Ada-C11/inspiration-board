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
      name: props.boardName,
      url: props.url,
      error: false,
    };
  }

  componentDidMount() {
    const boardPath = this.state.url + `/${this.state.name}/cards`;
    axios.get(boardPath)
      .then((response) => {
        this.setState({ cards: response.data });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  // TO DO: get page to refresh after a card is deleted

  render() {

    const deleteCard = (id) => {
      axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
      .catch((error) => {
        this.setState({ error: error.message });
      });

      const boardPath = this.state.url + `/${this.state.name}/cards`;
      axios.get(boardPath)
        .then((response) => {
          this.setState({ cards: response.data });
        })
        .catch((error) => {
          this.setState({ error: error.message });
        });
    }

    const allCards = this.state.cards.map((cardObj) => {
      return <Card text={cardObj.card.text} emoji={cardObj.card.emoji} id={cardObj.card.id} deleteHandler={deleteCard}/>
    });

    return (
      <section>
        <section className="validation-errors-display">
          <ul className="validation-errors-display__list">
            <li>{this.state.error}</li>
          </ul>
        </section>
        <section className="board">
          {this.state.error ? ("") : (allCards) }
        </section>
      </section>
    )
  }

}

Board.propTypes = {
  name: PropTypes.string,
};

export default Board;
