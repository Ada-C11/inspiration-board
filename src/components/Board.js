import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

//Modify the Board component to use axios to retrieve card data from the end point, using the board endpoint you configured in the setup requirements.

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      cardList: [],
      currentCard: undefined,
    };
  }

  componentDidMount() {
      axios.get(`https://inspiration-board.herokuapp.com/boards/${this.props.boardName}/cards`)
      .then((response) => {
        console.log(response.data);

        const cardList = response.data.map((data) => {
          const newCard = {
            id: data.card.id,
            text: data.card.text,
            emoji: data.card.emoji
          }
          return newCard;
        })
  
        console.log(cardList);
  
        this.setState({ cardList });
      })
      .catch((error) => {
        this.setState({ error: error.message })
      })
  }


  onDeleteCard = (cardID) => {
    const newCardList = this.state.cardList.filter(card => card.id !== cardID);

    this.setState({ cardList: newCardList })
  }

  addCardCallback = (card) => {
    // this.state.cardList.map(card => card.id)

    axios.post(this.ourURL, card)
    .then((response) => {
      console.log(response)
      card.id = response.data.card.id;
      console.log(card);

      const newCards = [card, ...this.state.cardList];
      this.setState({ cardList: newCards })
    })
    .catch((error) => {
      this.setState({ error: error.message })
    })
  }

    render() {
      const displayCards = this.state.cardList.map((card, i) => {
        return <Card 
                  key={i}
                  id={card.id}
                  text={card.text}
                  emoji={card.emoji}
                  onDeleteCard={this.onDeleteCard}
                />
      })
  
      return (
        <div>
          Board
          {/* <NewCardForm addCardCallback={this.addCardCallback} /> */}
          { displayCards }
        </div>
      )
    }

}

Board.propTypes = {

};

export default Board;
