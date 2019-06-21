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
      this.setState({cards: response.data})
      console.log('Response data is', response.data)
      // const allCards = response.data.map(card => {
      //   if (card) {
      //     return [{
      //       ...card
      //     }];
      //   } else {
      //     return [];
      //   }
      // });

      // this.setState({cards: allCards, })
    })
    .catch((error) => {
      this.setState({
        error: error.message
      })
    });
  }

  render() {
    // const boardCards = this.state.cards.map((card, index) => {
    //   return <Card key={index} card={card} />
    // })

    const allCards = this.state.cards.map((oneCard, index) => {
      return (
        <div key={index}>
          <Card text={oneCard.card.text} />
        </div>
      )
    });


    const errorSection = (this.state.errorMessage) ? 
    (<section className="error">
       Error: {this.state.errorMessage}
     </section>) : null;

    return (
      <div className="board">
        {/* {boardCards} */}
        <div>
          { errorSection }
        </div>
        <div>
          { allCards }
        </div>
      </div>
    )
  }

}

Board.propTypes = {
  boardName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Board;
