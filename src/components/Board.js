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

  deleteCardCallback = (id) => {
    console.log(this.props.urlCards+id.toString())

    axios.delete(this.props.urlCards+id.toString())
    .then((response) => {
      const index = this.state.cards.findIndex((object) => {
        return object.id===id;
      });
      let updatedData=this.state.cards;
      updatedData.splice(index,1);
      this.setState({cards: updatedData});

    })
    .catch((error) => {
      this.setState({error: error.message});
    })
  }

  generateCards = () => {
    return this.state.cards.map((card) => {
      return (<Card
      id={card.id}
      text={card.text}
      emoji={card.emoji}
      deleteCardCallback = {this.deleteCardCallback}
      />)
    })
  }

  componentDidMount() {
    axios.get(this.props.url+this.props.boardName+'/cards')
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
