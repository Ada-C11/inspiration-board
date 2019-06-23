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
      cards: [],
      myUrl: props.boardUrl + props.boardName + '/cards',
      errorMessages: []
    };
    
  }

  componentDidMount() {
    axios.get(this.state.myUrl)
      .then( response => {
        const apiCards = response.data.map( response => {
          return {
            id: response.card.id,
            text: response.card.text,
            emoji: response.card.emoji
          }
        })
        this.setState({ cards: apiCards });
      })
      .catch( error => {
        console.log(error.message)
        this.setState({errorMessages: error.message})
      });
  }

  removeCard = (cardIndex, cardID) => {
    console.log(cardIndex, cardID)

    axios.delete(this.props.baseURL + cardID )
      .then( response => {
        alert(`Successfully deleted pet with ${cardID}`);
        const newState = this.state.cards;
        newState.splice(cardIndex, 1);

        // TODO: get messages to display for user (not with alerts)
        newState.message = `Successfully deleted card with id: ${cardID}`;
        this.setState(newState);

      })
      .catch( error => {
        console.log(error.message)
        alert(`Encountered an error: ${error}`)
      });

  }

  addCard = (cardData) => {
    
    axios.post(`${this.state.myUrl}?text=${cardData.text}&emoji=${cardData.emoji}`)
      .then(response => {
        console.log(response.data)
        const newCardList = this.state.cards
        cardData.id = response.data.card.id
        newCardList.push(cardData)
        this.setState({ cards: newCardList})
      })
      .catch(error => {
        console.log(error)
        alert(`An error has occurred: ${error.message}`)
      })
  }
  
  render() {
    const generatedCards = this.state.cards.map((card, i ) => {
      console.log(card)
     return( 
      <div className="card">
        <Card 
          key={i}
          text={ card.text }
          emoji={ card.emoji }
          id={ card.id} 
          cardIndex={i} 
          deleteCardCallback={this.removeCard}
        />
      </div>);
    });

    const errorText = this.state.errorMessages
    return ( 
      <div> 
        <section className="validation-errors-display">
        {errorText}
        </section>
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
