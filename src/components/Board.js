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

      const allCards = response.data.map((card, i) => {
        return <Card
          key={i}
          cardId={card.card.id}
          text={card.card.text}
          emoji={card.card.emoji}
          removeCardCallback={this.removeCard}
        />
      });
      this.setState({ cards: allCards });
      console.log('cards in state after componentDidMount ', this.state.cards);
    })

    .catch((error) => {
      // this.showErrorMessageCallback = () => {
        this.props.showErrorMessageCallback(error)
      // }
    });
  }

  addCard = (newCard) => {
    // add the newCard to the cards array in state
      // let allCards = this.state.cards;
      // allCards.push(newCard);
      // this.setState({ cards: {allCards} });

      // ^^^^^^^^^^^code^^^^^^^^^
      // notes --->>
      // structure coming in from NewCardForm
          //new card:
          // card: {
          //   text: this.state.text,
          //   emoji: this.state.emoji}
      // structure in console from API inside card: props:
          // {cardId: 1143, text: "BE EXCELLENT TO EACHOTHER", emoji: null, removeCardCallback: ƒ}

// *******************************

// make the post request to add the new card to the database
  axios.post(`${this.props.url}/${this.props.boardName}/cards`, newCard)
  .then((response) => {
    // put functionality above in here
  })
  .catch((error) => {
    this.setState({error: error.message});
  });

  }

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

    const tempCardList = this.state.cards.filter(checkCard => checkCard.props.cardId !== cardId)
    this.setState({ cards: tempCardList });
    console.log('temp card list: ', tempCardList);
    console.log('updated card list in state: ', this.state.cards);
  }





  render() {
    return (
      <section>
        <div> <NewCardForm
        addCardCallback={this.addCard} />
        </div>

        <div> {this.state.cards} </div>
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
