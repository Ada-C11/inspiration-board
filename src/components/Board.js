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
      cards: [],
      name: props.boardName,
      url: props.url,
    };
  }

  componentDidMount() {
    const boardPath = this.state.url + `/${this.state.name}/cards`;
    axios.get(boardPath)
      .then((response) => {
        this.setState({ cards: response.data });
      })
      .catch((error) => {
        // TODO
      });
  }

  render() {

    const allCards = this.state.cards.map((cardObj) => {
      return <Card text={cardObj.card.text} emoji={cardObj.card.emoji} />
    });

    return (
      <section className="board">
        {allCards}
      </section>
    )
  }

}

Board.propTypes = {
  name: PropTypes.string,
};

export default Board;
