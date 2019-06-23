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
    };
  }

  componentDidMount() {
    const endpoint = this.props.url + this.props.boardName + "/cards"
    axios.get(endpoint)
      .then((response) => {
        console.log(response.data);

        const cardList = response.data.map((card) => {
          
          const newCard = { 
            key: card.card.id,
            quote: card.card.text,
            Emoji: card.card.emoji
          }
          return newCard
        })

        console.log(cardList);

        this.setState({cards: cardList});
      
      })
      
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    const display = this.state.cards.map((card) => {
      const { quote, Emoji} = card;
      return (<section>
        <Card quote={quote} Emoji={Emoji} />
      </section>);
    });

    return (
      <div className="board">
        {display}
      </div>
    );     
  }
}

Board.propTypes = {

};

export default Board;
