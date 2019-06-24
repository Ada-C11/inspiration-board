import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import "./Board.css";
import Card from "./Card";
import NewCardForm from "./NewCardForm";
import CARD_DATA from "../data/card-data.json";

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      errorMessage: null
      // cards: CARD_DATA.cards,
    };
  }

  componentDidMount() {
    axios
      .get(`${this.props.url}/${this.props.boardName}/cards`)
      .then(response => {
        this.setState({ cards: response.data });
        //console.log('we got a response', response.data)
      })
      .catch(error => {
        this.setState({
          errorMessage: error.message
        });
        console.log(error.message);
      });
  }

  addCardCallBack = (card) => {
    const infoCard = {
      text: card.text,
      emoji: card.cardEmoji,
    };
    axios.post(`${this.props.url}/${this.props.boardName}/cards`, infoCard)
      .then((response) => {
        console.log(card);
        let newcardsUpdate = this.state.cards;
        newcardsUpdate.unshift({ 
          card: {
          text: card.text,
          id: card.id,
          emoji: card.cardEmoji,
          } 
        }); //add new items
        this.setState({
          cards: newcardsUpdate
        });
        console.log(newcardsUpdate);
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message,
        });
      });
  }

  deleteCardCallBack = (cardId) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${cardId}`)
      .then((response) => {
        const updatedCardList = this.state.cards.filter(
          card => card.card.id !== cardId
        );

        this.setState({
          cards: updatedCardList
        });
      })
      .catch(error => {
        this.setState({
          errorMessage: error.message
        });
      });
  };

  render() {
    const errorDisplay = this.state.errorMessage ? (
      <section className="validation-errors-display">
        Error: {this.state.errorMessage}
      </section>
    ) : null;

    const cardList = this.state.cards.map((card, i) => {
      return (
        //<div key={i}>
        <Card
          key={i}
          id={card.card.id}
          text={card.card.text}
          cardEmoji={card.card.emoji}
          deleteCardCallBack={this.deleteCardCallBack}
        />
        //</div>
      )
    });

    return (
      <section>
        <div>{errorDisplay}</div>
        <div>
          <NewCardForm addCardCallBack={this.addCardCallBack} />
        </div>
        <div className="board">{cardList}</div>
      </section>
    );
  }
}

Board.propTypes = {};

export default Board;
