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
      error: "",
      deleteCardCallBack: this.deleteCard
    };
  }

  deleteCard = (id) => {
    const url = `https://inspiration-board.herokuapp.com/cards/${id}`
    axios.delete(url)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    
 }

  // componentDidMount() {
  //   this.importCards()
  // }

   // importCards = () => {
  //   CARD_DATA["cards"].forEach((card) => {
  //     this.state.cards.push(card)
  //     const newCards = this.state.cards
  //     this.setState({cards: newCards})
  //   })
  // }

  componentDidMount() {
    const url = `${this.props.url}${this.props.boardName}/cards`
    axios.get(url)
      .then((response) => {
        this.setState({ cards: response.data });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }


  render() {
    const allCards = this.state.cards.map((card, i) => {
      return <Card
      key={i}
      id={i}
      content={card}
      deleteCardCallBack = {this.state.deleteCardCallBack}
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
