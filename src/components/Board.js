import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';


class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      // error: null
    };
    console.log('cards in state: ', this.state.cards);
  }

  componentDidMount() {
    axios.get(`${this.props.url}/${this.props.boardName}/cards`)
    .then((response) => {
      // console.log(response);

      const cardsFromApi = response.data;

      let destructuredCards = cardsFromApi.map((cardObject, i) => {
        // card object has this form:
        // {card: {id: 1601, text: "temp text", emoji: "null"}}
        return cardObject.card;
      })

      this.setState({ cards: destructuredCards });
      console.log('cards in state after componentDidMount ', this.state.cards);
    })

    .catch((error) => {
      // this.showErrorMessageCallback = () => {
        this.props.showErrorMessageCallback(error)
      // }
    });
  }

// The difference between a weed and a flower is judgement.
  // allCardsFromApi = this.state.cards;

  addCard = (newCard) => {
  // make the post request to add the new card to the database

  const postURL = `${this.props.url}/${this.props.boardName}/cards`
  axios.post(postURL, newCard)


  .then((response) => {
    // add the newCard to the cards array in state
    // const allCards = response.data.map((card, i) => {
    //   return <Card
    //     key={i}
    //     cardId={card.card.id}
    //     text={card.card.text}
    //     emoji={card.card.emoji}
    //     removeCardCallback={this.removeCard}
    //   />
    // });

    let updatedCardList = this.state.cards;
    updatedCardList.push(newCard);
    this.setState({ cards: updatedCardList });
  })
  .catch((error) => {
    this.props.showErrorMessageCallback(error)
    });
};

// *******************************
// notes --->>
// structure coming in from NewCardForm
    //new card:
    // card: {
    //   text: this.state.text,
    //   emoji: this.state.emoji}
// structure in console from API inside card: props:
    // {cardId: 1143, text: "BE EXCELLENT TO EACHOTHER", emoji: null, removeCardCallback: ƒ}
// *******************************



  removeCard = (cardId) => {
    console.log('removing card ', cardId);
    console.log('all cards: ', this.state.cards);

// ***** UNCOMMENT THIS FUNCTION TO REINSTATE THE ABILITY TO DELETE CARDS ******
    // axios.delete(`https://inspiration-board.herokuapp.com/cards/${cardId}`)
    // .then((response) => {
    //   console.log(response);
    // })
    // .catch((error) => {
    //   this.props.showErrorMessageCallback(error)
    // });
// *****************************************************************************

    const tempCardList = this.state.cards.filter(checkCard => checkCard.id !== cardId)
    this.setState({ cards: tempCardList });
    console.log('temp card list: ', tempCardList);
    console.log('updated card list in state: ', this.state.cards);
  }


  render() {
    // const allCards =
    console.log('In render on board. state cards: ', JSON.parse(JSON.stringify(this.state.cards)));
    const displayAllCards = this.state.cards.map((card, i) => {
      console.log('Board.js, render, this.state.cards.map card:', card);
      return (
        <div className='card' key={i}>
          <Card
            key={i}
            cardId={card.id}
            text={card.text}
            emoji={card.emoji}
            removeCardCallback={this.removeCard}
          />
        </div>)
    });
    return (
      <section>
        <div> <NewCardForm
        addCardCallback={this.addCard} />
        </div>

        <div className='board'>{displayAllCards}</div>
        {/*<div> {this.state.cards} </div>*/}
        {/* <div> {this.allCardsFromApi} </div> */}
      </section>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
  showErrorMessageCallback: PropTypes.func.isRequired
};

export default Board;
