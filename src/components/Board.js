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

  render() {
    return (
      <div>
        Board
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
