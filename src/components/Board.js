import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      myUrl: props.url + props.boardName + '/cards'
    };
    
  }


  componentDidMount() {
    axios.get(this.state.myUrl)
      .then( response => {
        this.setState({ cards: response.data});
      })
      .catch( error => {
        // TODO 
      });
  }


  removeCard = (cardIndex) => {
    console.log('in remove card')
    // const newState = this.state;
    // const allCards = newState.cards;
    // const deletedCard = allCards.splice(cardIndex, 1);
    // newState = allCards;

    // this.setState(newState);
  }


  render() {
    const generatedCards = this.state.cards.map( card => {
     return( 
     <li>
       <Card 
         card={ card.card } 
         deleteCardCallback={this.removeCard}
       />
     </li>);
    });
    return (
      <div>
        {generatedCards}
      </div>
    )
  }

}

Board.propTypes = {
  
};

export default Board;
