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
    };
    
  }

  componentDidMount() {
    axios.get(this.state.myUrl)
      .then( response => {
        this.setState({ cards: response.data});
      })
      .catch( error => {
        alert(`Error has occurred: ${error.message}`)
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
        alert(`Encountered an error: ${error.message}`)
      });

  }

  addCard = (cardData) => {
    
    axios.post(`${this.state.myUrl}?text=${cardData.text}&emoji=${cardData.emoji}`)
      .then(response => {
        alert("Succesffully created your new card")
        const newCardList = this.state.cards
        cardData.id = response.data.card.id
        newCardList.push(cardData)
        this.setState({cards: newCardList})
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
          text={ card.card.text }
          emoji={card.card.emoji}
          id={card.card.id}
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
