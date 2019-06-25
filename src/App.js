import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import NewCardForm from './components/NewCardForm';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.boardName = `chantal-demissie`;
    this.boardCardsUrl = "https://inspiration-board.herokuapp.com/boards/" + this.props.boardName + '/cards';
    this.deleteCardUrl = "https://inspiration-board.herokuapp.com/cards/";

    this.state = {
      cards: [],
    };

    //import CARD_DATA from '../data/card-data.json';
  }

  componentDidMount() {
    this.getCards();
  }

  getCards() {
    axios.get(this.boardCardsUrl).then((response) => {
      this.setState({
        cards: response.data.map((card) => card.card)
      });
    });
  }

  newCard(cardParams) {
    axios.post(this.boardCardsUrl, cardParams).then((response) => {
      const cards = this.state.cards;
      cards.push(response.data.card);
      this.setState({
        cards: cards
      })
    })
  }

  deleteCardCallback(cardId) {
    // remove card from the board
    const index = this.state.cards.findIndex(
      card => card.id === cardId);
    const cards = this.state.cards;
    cards.splice(index, 1);
    this.setState({
      cards: cards
    })

    // deleted from API
    const url = this.deleteCardUrl + cardId;
    axios.delete(url)
  }

  render() {
    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
        <Board
          cards={this.state.cards}
          deleteCardCallback={this.deleteCardCallback.bind(this)}
        />
        <NewCardForm
          newCardCallback={this.newCard.bind(this)} 
        />
      </section>
    );
  }
}

export default App;
