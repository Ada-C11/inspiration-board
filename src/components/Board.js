import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';
import { thisTypeAnnotation } from '@babel/types';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // cards: [
      //   'Ore wa kaizoku ou ni naru!'
      // ],
      cards: [],
      error: null, 
    };
  }

  componentDidMount() {
    const getAllCards =  `https://inspiration-board.herokuapp.com/boards/${this.props.boardName}/cards`;

    axios.get(getAllCards)
    .then((response) => {
      console.log('In .then!!');
      // const allCards = response.data.map((oneCard) => {
      //   return{
      //     text: oneCard.card.text,
      //     id: oneCard.id,
      //     emoji: oneCard.emoji,
      //   }
      // })
      this.setState({cards: response.data})
    })
    .catch((error) => {
      this.setState({
        error: error.message
      })
    })
  }

  onDeleteCard = (id) => {
    console.log('Inside of deleteCard!!')
    console.log(id)
    // const deleteCardPath = `https://inspiration-board.herokuapp.com/cards/${cardId}`;
    // axios.delete(deleteCardPath)
    // .then(() => {
    //   console.log('inside of then in on delete carddddddd')
    //   // const newCardList = this.state.cards
    //   // const card = newCardList.splice()
    //   // const newCardList = this.state.cards.filter(card => card.id === cardId);
    //   // this.setState({ cards: newCardList });
    // })
    // .catch((error) => {
    //   this.setState({ 
    //     error: error.message
    //   });
    // });
  }
   
  

  render() {
    const allCards = this.state.cards.map((card, index) => {
      const { id, text, emoji } = card.card;

      const styledCard = {
        id: id,
        text: text,
        emoji: emoji
      };

      console.log(styledCard.id)
      return (
        <div>
          <Card key={index} index={index} id={id} text={text} card={card} onDeleteCard={() => this.onDeleteCard(id)}/>
        </div>
      )
    });


    const errorSection = (this.state.errorMessage) ? 
    (<section className="error">
       Error: {this.state.errorMessage}
     </section>) : null;

    return (
      <section className="board">
        <div>
          { errorSection }
        </div>
        <div>
          { allCards }
        </div>
      </section>
    )
  }

}

Board.propTypes = {
  boardName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Board;
