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
      })
      .catch( error => {
        // TODO 
      });
  }


  removeCard = (cardID) => {
    const newState = this.state.cards;
    const deletedCard = newState.splice(cardID, 1);
    this.setState(newState);

    const deletedID = deletedCard[0].card.id

    axios.delete(this.props.deleteURL + deletedID)
      .then( response => {
       alert(`Successfully deleted pet with ${deletedID}`)
       this.setState({ message: `Successfully deleted pet with ${deletedID}`}) // will use to add info for user
      })
      .catch( error => {
        console.log(error.message)
        alert(`Encountered an error: ${error.message}`)
      });

  }

  reportStatus = (message) => {
    console.log('inside error handling helper')
    return (message) => {
      return ( <ul>
        <li>
          message
        </li>
      </ul> )
    }
  }

  


  render() {
    
    const generatedCards = this.state.cards.map((card, i ) => {
     return( <li key={card.card.id}>
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
