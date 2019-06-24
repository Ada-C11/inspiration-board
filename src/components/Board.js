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
    const myURL = this.props.url + this.props.boardName + "/cards"; 
    axios.get(myURL)
      .then((response) => {
        console.log(response.data);
        const cards = response.data.map((info) => {
          const newCard = {
            text: info.text, 
            emoji: info.emoji, 
            id: info.id
          }
          return newCard;
        })
        this.setState({
          cards
        })
      })
      .catch((error) => {
        this.setState({ error: error.message })
      })
  }

  onDeleteCard =(cardID) => {

  }
  //from Ada Pets
  addCardCallback = (card) => {
    const myURL = this.props.url + this.props.boardName + "/cards"; 

    axios.post(myURL, card)
      .then((response) => {
        const info = response.data["card"]
        let updatedCard = this.state.cards;
        updatedCard.push({
          id: info.id, 
          text: card.text, 
          emoji: card.emoji
        });
        this.setState({cards: updatedCard});
      })
      .catch((error) => {
        this.setState({ error: error.message })
    });
  }


  render() {
    const displayCards = this.state.cards.map((card, i) => {
      return (<Card
                key={i}
                id={card["card"].id}
                text={text["card"].text}
                emoji={emoji["card"].emoji} 
              />)
    })
    return (
      <section>
        <div className="board">
          <NewCardForm addCardCallback={this.addCardCallback} />
          {displayCards}
        </div>
      </section>
    
    )
  }

}

Board.propTypes = {
  boardName: PropTypes.string,
  myUrl: PropTypes.string.isRequired,
};

export default Board;
