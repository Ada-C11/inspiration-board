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
      errorMessages: '', 
      message: '',
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
        const newState = this.state.cards;
        newState.splice(cardIndex, 1);
        newState.message = `Successfully deleted card with id: ${cardID}`;

        this.setState(newState);
      })
      .catch( error => {
        console.log(error.message);
        this.setState({ errorMessages: error.message});
      });

  }

  addCard = (cardData) => {
    
    axios.post(`${this.state.myUrl}?text=${cardData.text}&emoji=${cardData.emoji}`)
      .then(response => {
        console.log(response.data);
        const newCardList = this.state.cards;
        cardData.id = response.data.card.id;
        newCardList.push(cardData);
        this.setState({ 
          cards: newCardList, 
          message: `Successfully added card with id: ${cardData.id}`});
      })
      .catch(error => {
        console.log(error);
        this.setState({ errorMessages: error.message});
      })
  }
  
  render() {
    const generatedCards = this.state.cards.map((card, i ) => {
     return( 
      <div key={i} className="card">
        <Card 
          text={ card.text }
          emoji={ card.emoji }
          id={ card.id} 
          cardIndex={i} 
          deleteCardCallback={this.removeCard}
        />
      </div>);
    });

    const errorText = this.state.errorMessages;
    const successful = this.state.message;
    return ( 
      <div> 
        <section className="validation-errors-display">
        {errorText ? errorText : null}
        {successful ? successful : null}
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
