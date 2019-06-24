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
      deleteCardCallBack: this.deleteCard,
      addCardCallBack: this.addCard,
    };
  }


  componentDidMount() {
    this.updateCards()
  }

  updateCards = () => {
    const url = `${this.props.url}${this.props.boardName}/cards`
    axios.get(url)
      .then((response) => {
        this.setState({ cards: response.data });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  deleteCard = (id) => {
    const url = `https://inspiration-board.herokuapp.com/cards/${id}`
    axios.delete(url)
    .then(res => {
      console.log(res);
      console.log(res.data);
      this.updateCards()
    })
 }

 addCard = (cardContent) => {
   const url = `${this.props.url}${this.props.boardName}/cards`

    axios.post(url, cardContent)
    .then((response) => {
      this.updateCards()
    })
    .catch((error) => {
      // Use the same idea we had in our GET request
      this.setState({ error: error.message });
    });
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


  render() {
    console.log(this.state.cards)
    const allCards = this.state.cards.map((card, i) => {
      return <Card
                key={i}
                id={card["card"["id"]]}
                text={card["card"]["text"]}
                emoji={card["card"]["emoji"]}
                deleteCardCallBack = {this.state.deleteCardCallBack}
      />
    })
    return (
      <div>
        <NewCardForm addCardCallBack = {this.state.addCardCallBack} />
        {allCards}
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
