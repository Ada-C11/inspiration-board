import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const BOARD_API_URL = 'https://inspiration-board.herokuapp.com/';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    axios.get(BOARD_API_URL + 'boards/' + this.props.boardName + '/cards')
      .then((response) => { 
        const cardList = response.data.map((card) => {
          const newCard = {
            ...card,
          }
          return newCard.card;
        })

        this.setState({
          cards: cardList,
        })
      })
      
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    const cardList = this.state.cards.map((card, index) => {
      const { text, emoji } = card;
      return ( <section>
                <Card
                key={index}
                text={text}
                emoji={emoji}
                />
              </section>
      );
    })

    return (
      <div>
        {cardList}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
