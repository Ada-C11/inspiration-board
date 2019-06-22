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
      errorMessage: null,

    };
  }
  
  componentDidMount() {
    const url = (this.props.url);
    const name = (this.props.boardName);
    const myURL = url+name+"/cards"
    axios.get(myURL)
      .then((response) => {
        console.log(response.data);
        this.setState({
          cards: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onDeleteCard =(cardID) => {

  }

  addCardCallback = (cardInfo) => {
    const cardIds = this.state.cards;

    axios.post(myURL, card)
      .then((response) => {
        let updatedCard = this.state.cards;
        updatedCard.push(cardInfo);
        this.setState({cards: updatedCard});

      })
      .catch((errors) => {
        this.setState({ error: error.message })
    });
  }


  render() {
    const cards = this.state.cards.map((card, i) => {
      return <Card
                key={i}
                id={card["card"].id}
                text={text["card"].text}
                emoji={emoji["card"].emoji} />
    })
    return (
      <section>
        <div className="board">
          {cards}
          Board
        </div>
      </section>
    )
  }

}

Board.propTypes = {
  boardName: PropTypes.string
};

export default Board;
