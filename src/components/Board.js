import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';



class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  generateCards = () => {
    return this.state.cards.map((card) => {
      return (<Card
      id={card.id}
      text={card.text}
      emoji={card.emoji}
      />)
    })
  }

  componentDidMount() {
    axios.get(this.props.url+'Ada-Lovelace/cards')
    .then((response) => {
      console.log(response.data)
      const updatedCards=response.data.map((card) => {
        const newCard = {

          ...card.card,
          emoji: card.card.emoji==null ? "" : card.card.emoji
        }
         
        return newCard
  
      })

      console.log(updatedCards)
      this.setState({cards: updatedCards})

    })
    .catch((error) => {
      console.log(error);
    })

  
    // const updatedCards=CARD_DATA.cards.map((card) => {
    //   if (card.Emoji) {
    //     card.emoji = card.Emoji
    //   } else if (card.emoji === undefined) {
    //     card.emoji = ""
    //   }
    //   return card

    // })
    // this.setState({cards: updatedCards})
    
  }

  render() {
    console.log(this.state)
    return (
      <div>
        Board
        {this.generateCards()}/>
        
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
