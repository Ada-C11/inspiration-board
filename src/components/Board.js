import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

// wave 3
// Add a delete button on each card which will remove a card from the Board and delete it from the API.
// first step, put on a button
// second step, uhh, I will probably find the index number then delete
// Delete a card DELETE https://inspiration-board.herokuapp.com/cards/:card_id
// Create a NewCardForm component which will add new cards to the board and trigger POST requests to the API to create a card on the API.
// Add a New Card:
// POST https://inspiration-board.herokuapp.com/boards/:board_name/cards
// accepted params:
// text (string)
// emoji (string)
// form will be on form page, then callbacks to this page to post it?
// Create a shallow snapshot tests for the Card and NewCardForm components
// ugh testing :(




class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      errorMessage: null,

    };
  }

  deleteCardCallback = (card) => {
    console.log(card);
    console.log(card.id);

    const deleteURL = 'https://inspiration-board.herokuapp.com/cards/' + card.id;
    axios.delete(deleteURL)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message
        });
      });
      
      const newCardList = this.state.cards.filter(card2 => card2.card.id !== card.id);

      this.setState({
        cards: newCardList
      });
      

  }

  addCardCallback = (card) => {
    console.log(card.text);
    const cardDataToSendToApi = {
      text: card.text,
      emoji: card.emoji,
    };

    const postURL = 'https://inspiration-board.herokuapp.com/boards/' + this.props.boardName + '/cards';
    axios.post(postURL, cardDataToSendToApi)
    .then((response) => {
      console.log("This is what response.data looks like from the API on a successful response", response.data)
      let updatedCardList = this.state.cards;
      updatedCardList.push({
        text: card.text,
        emoji: card.emoji,
      });
      this.setState({
        card: updatedCardList,
      });
    })
    .catch((error) => {
      this.setState({
        errorMessage: error.message
      });
    });
  }

  componentDidMount() {
    const localUrl = this.props.url + this.props.boardName + "/cards"
    console.log(localUrl);
    // is this needed and why?
    // const cards = this.state.cards
    axios.get(localUrl)
      .then((response) => {
        // console.log("in axios!");
        // console.log(response.data)
        this.setState({ 
          cards: response.data,
        })
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message });
      });
  }

  render() {
    const cardComponents = this.state.cards.map( (cardObject, i) => {
     return (
       <div key={i}>
         {/* need to have it accept card["emoji"] as well */}
         <Card card={cardObject.card} deleteCardCallback={this.deleteCardCallback}/>
       </div>
     )
   });

   // oh fuck this should all be in App.js
   const errorSection = (this.state.errorMessage) ? 
   (<section className="error">
      Error: {this.state.errorMessage}
    </section>) : null;

    return (
      <div className="board">
        { errorSection }
        { cardComponents }
        <NewCardForm addCardCallback={this.addCardCallback}/>
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
