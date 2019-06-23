import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';
// import { thisTypeAnnotation } from '@babel/types';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      errorMessage: null
    };
  }

  componentDidMount() {
    axios.get(this.props.url + this.props.boardName + '/cards')
      .then((response) => {

        this.setState({
          cards: response.data
        })

      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message
        })
      })
  }

  onDeleteCard = (cardId) => {

    axios.delete(`https://inspiration-board.herokuapp.com/cards/${cardId}`)

    axios.get(this.props.url + this.props.boardName + '/cards')
      .then((response) => {

        const newCardList = this.state.cards.filter(card => card.card.id !== cardId);

        this.setState({
          cards: newCardList
        })

      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message
        })
      })
  }

  onPostMessage = (card) => {
    axios.post(this.props.url + this.props.boardName + '/cards', card)
      .then((response) => {

        let updatedCardList = this.state.cards;
        updatedCardList.push(card);

        this.setState = ({
          cards: updatedCardList
        });
      })
      .catch((error) => {
        this.setState = ({
          errorMessage: error.message
        })
      });

  }



  render() {

    const { cards, errorMessage } = this.state;

    const showCard = cards.map((card, i) => {
      return (
        <div className='card' key={i}>
          <Card
            id={card.card.id}
            text={card.card.text}
            emoji={card.card.emoji}
            onDeleteCardCallback={this.onDeleteCard}
          />
        </div>
      );
    })
    return (
      <div>
        {errorMessage && <div className='validation-errors-display'>
          <h3>Errors:</h3>
          <p className='validation-errors-display__list'>{errorMessage}</p>
        </div>}
        <div><NewCardForm onPostMessageCallback={this.onPostMessage} /></div>
        <div className='board'>{showCard}</div>

      </div>

    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
