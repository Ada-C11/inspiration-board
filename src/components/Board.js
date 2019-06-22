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
      myUrl: props.boardUrl + props.boardName + '/cards',
      message: ''
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

    axios.delete(this.props.baseURL + cardID )
      .then( response => {
        // alert(`Successfully deleted pet with ${cardID}`);
        const newState = this.state.cards;
        newState.splice(cardID, 1);

        // TODO: get messages to display for user (not with alerts)
        newState.message = `Successfully deleted card with id: ${cardID}`;
        this.setState(newState);
        this.componentDidMount()
      })
      .catch( error => {
        console.log(error.message)
        alert(`Encountered an error: ${error.message}`)
      });

  }

  addCard = (cardData) => {
    
    axios.post(`${this.state.myUrl}?text=${cardData.text}&emoji=${cardData.emoji}`)
      .then(response => {
        alert("Succesffully created your new card")

      })
      .catch(error => {
        alert(`An error has occurred: ${error.message}`)
      })
  }
  
  render() {
    
    const generatedCards = this.state.cards.map((card, i ) => {
     return( 
      <div key={card.card.id} className="card">
        <Card 
          card={ card.card }
          cardIndex={i} 
          deleteCardCallback={this.removeCard}
        />
      </div>);
    });

    return ( 
      <div> 
        <section className="board"> 
          {generatedCards} 
        </section>
        <section className="new-card-form">
        <NewCardForm 
          addNewCardCallback={ this.addCard }/>
        </section>
      </div>
      
      
    );
  }

}

Board.propTypes = {
  boardUrl: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired, 
  deleteURL: PropTypes.string
};

export default Board;
