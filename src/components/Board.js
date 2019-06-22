import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardList: [],
      error: ''
    };
  }

  componentDidMount() {
      axios.get(`https://inspiration-board.herokuapp.com/boards/${this.props.boardName}/cards`)
      .then((response) => {

        const cardList = response.data.map((data) => {
          const newCard = {
            id: data.card.id,
            text: data.card.text,
            emoji: data.card.emoji
          }
          return newCard;
        })
  
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
    axios.post(`https://inspiration-board.herokuapp.com/boards/${this.props.boardName}/cards`, card)
    .then((response) => {
      card.id = response.data.card.id;

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
          <NewCardForm addCardCallback={this.addCardCallback} />
          { displayCards }
        </div>
      )
    }

}

Board.propTypes = {
  url: PropTypes.string,
  boardName: PropTypes.string
};

export default Board;
