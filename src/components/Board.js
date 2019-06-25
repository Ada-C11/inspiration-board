import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  };

  componentDidMount(){
     axios.get(`${this.props.url}${this.props.boardName}`+"/cards")
     .then((response)=>{
       const cards = response.data.map((cardObj)=>{
         const newCard = {
           ...cardObj.card,
         };
         return newCard;
       });
       this.setState({
         cards:cards,
       });
     })
     .catch((error)=>{
       this.setState({
         errorMessage: error.message,
       });
     });
  };

  deleteCard = (cardId) => {
    axios.delete("https://inspiration-board.herokuapp.com/cards/"+`${cardId}`)
    .then(response =>{
      const cardList =[...this.state.cards];
      let deleteIndex = undefined;

       cardList.forEach((card, index) => {
        if (cardId === card.id) {
          deleteIndex = index;
        }
      });

       cardList.splice(deleteIndex, 1);

       this.setState({
        cards: cardList,

       });
    }).catch(error => {
      console.log(error.message);
      this.setState({
        errorMessage: error.message
      });
    });
   };

  addCard = (newCard) => {
    console.log("add card method");
    const url = 'https://inspiration-board.herokuapp.com/boards/laneia/cards';
    axios.post(url, newCard)
    .then((response)=>{
      console.log("added");
      const {cards} =this.state;

       cards.push(newCard);

       this.setState({
        cards: cards,

       });
    })
    .catch((error)=>{
      this.setState({
        errorMessage:`Failure ${error.message}`,
      })
      console.log(error)
    });

   };

  render() {
    const cardList = this.state.cards.map((card)=>{
      return <Card
        key={card.id}
        id={card.id}
        text={card.text}
        emoji={card.emoji}
        deleteCardCallback={this.deleteCard}
      />
    });

    return (
      <div>
        <section>
          {this.state.errorMessage}
        </section>
        <section className="board">
               <span className="card">
                 <NewCardForm addCardCallback={this.addCard}/>
               </span>
             {cardList}
        </section>
      </div>
    );
  }
};

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
