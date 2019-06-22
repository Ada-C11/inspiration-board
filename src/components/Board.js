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
      // cardText: 'hello!',
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
    console.log('here are all your cards!!!!!', this.state.cards)
  }

  onDeleteCard = (id) => {
    // let savedCard;

  let updatedListCards = this.state.cards;
  let i = 0;

    for (let card of updatedListCards) {
      if (card.card.id === id) {
        // savedCard = card;
        break;
      }
      i += 1;
    }

    axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`)

    this.setState({
    cards: this.state.cards,
    })
    
    // axios.get(this.props.url + this.props.boardName + '/cards')
    //   .then((response) => {
     
    //     this.setState({
    //       cards: response.data
    //     })

    //   })
    //   .catch((error) => {
    //     this.setState({
    //       errorMessage: error.message
    //     })
    //   })

    console.log('Im in onDeleteCard!!!!!!', id);
    
    // updatedListCards.splice(i, 1);

    // this.setState({
    //   cards: updatedListCards
    // })


  }


  render() {

    const { cards, cardText, errorMessage } = this.state;

    const showCard = cards.map((card, i) => {
      return (
        <div className='card' key={i}>
          <Card
            index={i}
            id={card.card.id}
            text={card.card.text}
            emoji={card.card.emoji}
            onDeleteCardCallback={this.onDeleteCard}
          />
        </div>
      );
    })
    return (
      <div className='board'>
        {showCard}
      </div>

    )
  }

}

Board.propTypes = {

};

export default Board;
