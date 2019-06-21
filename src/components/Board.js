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
      error: ""
    };
  }


  // componentDidMount() {
  //   this.importCards()
  // }

  componentDidMount() {
    axios.get('https://inspiration-board.herokuapp.com/boards/niv/cards')
      .then((response) => {
        this.setState({ cards: response.data });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  // importCards = () => {
  //   CARD_DATA["cards"].forEach((card) => {
  //     this.state.cards.push(card)
  //     const newCards = this.state.cards
  //     this.setState({cards: newCards})
  //   })
  // }


  render() {
    const allCards = this.state.cards.map((card, i) => {
      return <Card
      key={i}
      content={card}
      />
    })
    return (
      <div>
        {allCards}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
