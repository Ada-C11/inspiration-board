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
  };

  deleteCard = (id) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
      .catch((error) => {
        this.setState({ error: error.message });
      });

    const afterDelete = this.state.cards.filter(
      card => card.id !== id
    );

    this.setState({ cards: afterDelete });
  }

  getUpdatedCards = () => {
    const allCards = this.state.cards.map((cardObj, i) => {
      return <Card key={i} text={cardObj.card.text} emoji={cardObj.card.emoji} id={cardObj.card.id} deleteHandler={this.deleteCard} />
    });
    return allCards;
  };

  render() {

    return (
      <section>
        <section className="validation-errors-display">
          <ul className="validation-errors-display__list">
            <li>{this.state.error}</li>
          </ul>
        </section>
        <section className="board">
          {this.state.error ? ("") : (this.getUpdatedCards())}
        </section>
      </section>
    )
  }

}

Board.propTypes = {
  name: PropTypes.string,
};

export default Board;
