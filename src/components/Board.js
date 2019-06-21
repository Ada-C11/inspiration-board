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

    const URL = this.props.url + this.props.boardName + "/cards";

    // console.log("This is the URL");
    // console.log(this.props.url);

    axios.get(URL)
      .then((response) => {
      console.log(response.data);

        const cardList = response.data.map((card) => {
    
    
          const newCard = {
            text: card.card.text,
            emoji: card.card.emoji,
          }
    
          return newCard;
        })

        console.log("Hello, out there!");
        console.log(cardList);

        this.setState({ cards: cardList });

      })
      // })
      .catch((error) => {
      console.log(error);
      });

    // const cardList = CARD_DATA.cards.map((card) => {

    //   let cardText;
    //   let cardEmoji;

    //   if (card.text === undefined) {
    //     cardText = "" }
    //   else {
    //     cardText = card.text;
    //   }

    //   if (card.Emoji) {
    //     cardEmoji = card.Emoji
    //   } else if (card.emoji === undefined) {
    //     cardEmoji = ""
    //   } else {
    //     cardEmoji = card.emoji
    //   }

    //   // if (card.emoji === undefined) {
    //   //   cardEmoji = "" }
    //   // else {
    //   //   cardEmoji = card.emoji
    //   // }


    //   const newCard = {
    //     text: cardText,
    //     emoji: cardEmoji,
    //   }

    //   return newCard;
    // })

    // this.setState({ cards: cardList });
  }

  deleteCard = () => {
    console.log("Hey, it worked!");
  };


  render() {
    // console.log(this.state.cards);
    // console.log("Hello");
    console.log(this.deleteCard);
    const cards = this.state.cards.map((card, i) => {

      return (
        <li key={i}>
          <Card quote={card.text} emoji={card.emoji} deleteCardCallback={this.deleteCard} />
        </li>
      );
    });


    return (
      <div>
        Board
        {cards}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
