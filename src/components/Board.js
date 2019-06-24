import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      error: "",
    };

  }

  componentDidMount() {

    console.log("Inside componentDidMount");

    const { url, boardName } = this.props;

    const getURL = url + boardName + "/cards";

    axios.get(getURL)
      .then((response) => {
      console.log(response.data);

        const cardList = response.data.map((card) => {
    
    
          const newCard = {
            id: card.card.id,
            text: card.card.text,
            emoji: card.card.emoji,
          }
    
          return newCard;
        })

        console.log(cardList);

        this.setState({ cards: cardList });

      })
      .catch((error) => {
        this.setState({ error: `${error.message} while loading your cards!` });
      });
  }

  addCard = (cardInfo) => {
    console.log(cardInfo);

    const { url, boardName } = this.props;
    const postURL = url + boardName + "/cards";

    axios.post(postURL, cardInfo)
      .then((response) => {
        console.log(response.data.card.id);
        cardInfo.id = response.data.card.id;
      //What should we do when we know the post request worked?
        let updatedCards = [...this.state.cards];
        updatedCards.push(cardInfo);
        this.setState({cards: updatedCards});
        
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: `${error.message} while adding your card!` })
      })
  }


  deleteCard = (index) => {
    console.log(index);

    let updatedCards = this.state.cards;
    let id = updatedCards[index].id;
    console.log(id);

    const deleteUrl = "https://inspiration-board.herokuapp.com/cards/" + id;

    axios.delete(deleteUrl)
      .then((response) => {

      updatedCards.splice(index, 1);

      this.setState({
        cards: updatedCards,
      });

      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: `${error.message} while deleting your card!`})
      })
  };


  render() {
    const cards = this.state.cards.map((card, i) => {

      return (
        <li key={i}>
          <Card 
            id={card.id}
            index={i}
            quote={card.text} 
            emoji={card.emoji} 
            deleteCardCallback={this.deleteCard} />
        </li>
      );
    });


    return (
      <section>

      <div className="validation-errors-display validation-errors-display__list">
        {this.state.errors}
      </div>

      <div className="board">
        {cards}
      </div>

      <div className="board">
        <NewCardForm addCardCallback={this.addCard}/>
      </div>
      </section>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string,
  boardName: PropTypes.string,
};

export default Board;
