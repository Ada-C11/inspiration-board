import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

// const URL = "https://inspiration-board.herokuapp.com/boards/jansen-martin/cards";

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };

  }

  componentDidMount() {

    console.log("Inside componentDidMount");

    const URL = this.props.url + this.props.boardName + "/cards";

    // console.log("This is the URL");
    // console.log(this.props.url);

    axios.get(URL)
      .then((response) => {
      console.log(response.data);

        const cardList = response.data.map((card) => {
    
    
          const newCard = {
            id: card.card.id,
            text: card.card.text,
            emoji: card.card.emoji,
          }
    
          return newCard;
        })

        console.log(cardList);

        this.setState({ cards: cardList });

      })
      // })
      .catch((error) => {
      console.log(error);
      });
  }

  addCard = (cardInfo) => {
    console.log(cardInfo);
    // let updatedCards = [...this.state.cards];
    // updatedCards.push(cardInfo);
    // this.setState({cards: updatedCards});

    axios.post("https://inspiration-board.herokuapp.com/boards/jansen-martin/cards", cardInfo)
      .then((response) => {
        console.log(response);
      //What should we do when we know the post request worked?
      })
      .catch((error) => {
        console.log(error);
      // What should we do when we know the post request failed?
      })
  }


  deleteCard = (id) => {
    const deleteUrl = "https://inspiration-board.herokuapp.com/cards/" + id;
    // console.log(id);

    axios.delete(deleteUrl)
      .then((response) => {
      console.log(response);

      let updatedCards = [...this.state.cards];

     const index = updatedCards.findIndex((card) => card.id == id);

     updatedCards.splice(index, 1);

      this.setState({
          cards: updatedCards,
      });


      })
      .catch((error) => {
      console.log(error);
      })
  };


  render() {
    // console.log(this.state.cards);
    // console.log("Hello")
    const cards = this.state.cards.map((card, i) => {

      return (
        <li key={card.id}>
          <Card id={card.id} quote={card.text} emoji={card.emoji} deleteCardCallback={this.deleteCard} />
        </li>
      );
    });


    return (
      <div>
        Board
        {cards}

        <NewCardForm addCardCallback={this.addCard}/>
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
