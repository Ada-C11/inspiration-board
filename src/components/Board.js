import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import "./Board.css";
import Card from "./Card";
import NewCardForm from "./NewCardForm";
import CARD_DATA from "../data/card-data.json";

class Board extends Component {
  constructor(prop) {
    super(prop);

    this.state = {
      cards: []
    };
  }

  onDeleteCard = id => {
    const cardIndex = this.state.cards.findIndex(card => {
      return card["card"].id === id;
    });

    this.state.cards.splice(cardIndex, 1);

    this.setState({ cards: this.state.cards });

    axios
      .delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
      .catch(error => {
        this.setState({ error: error.message });
      });
  };

  addCard = card => {
    const newState = this.state;
    newState.cards.push({ card });

    this.setState(newState);

    axios
      .post(
        `https://inspiration-board.herokuapp.com/boards/${
          this.props.boardName
        }/cards`,
        card
      )
      .catch(error => {
        this.setState({ error: error.message });
      });
  };

  componentDidMount() {
    axios
      .get(`${this.props.url}${this.props.boardName}/cards`)
      .then(response => {
        this.setState({ cards: response.data });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  render() {
    const firstCard = this.state.cards.map((message, i) => {
      return (
        <Card
          key={i}
          id={message["card"].id}
          text={message["card"].text}
          emoji={message["card"].emoji}
          onDeleteCardCallback={this.onDeleteCard}
        />
      );
    });

    return (
      <div>
        {firstCard}
        <NewCardForm addCardCallback={this.addCard} />
      </div>
    );
  }
}

Board.propTypes = {};

export default Board;
