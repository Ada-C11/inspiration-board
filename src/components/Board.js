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
      myUrl: props.url + props.boardName + '/cards',
      message: null
    };
    
  }


  componentDidMount() {
    axios.get(this.state.myUrl)
      .then( response => {
        this.setState({ cards: response.data});
        console.log(response.status);
      })
      .catch( error => {
        alert(`Error has occurred: ${error.message}`)
      });
  }


  removeCard = (cardIndex, cardID) => {
    console.log(cardIndex, cardID)

    axios.delete(this.props.deleteURL + cardID )
      .then( response => {
        alert(`Successfully deleted pet with ${cardID}`);
        const newState = this.state.cards;
        newState.splice(cardID, 1);
        
        // TODO: get messages to display for user (not with alerts)
        newState.message = `Successfully deleted pet with id: ${cardID}`;
        this.setState(newState);
      })
      .catch( error => {
        console.log(error.message)
        alert(`Encountered an error: ${error.message}`)
      });

  }
  
  render() {
    
    const generatedCards = this.state.cards.map((card, i ) => {
     return( 
      <li key={card.card.id}>
        <Card 
          card={ card.card }
          cardIndex={i} 
          deleteCardCallback={this.removeCard}
        />
      </li>);
    });

    return ( <div> {generatedCards} </div>);
  }

}

Board.propTypes = {
  
};

export default Board;
