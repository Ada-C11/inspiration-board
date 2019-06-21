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

    console.log(this.state.cards)
  }

  componentDidMount() {
    axios
      .get(`${this.props.url}${this.props.boardName}/cards`)
      .then(response => {
        console.log(response)
        this.setState({ cards: response.data});
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  render() {
    const firstCard = this.state.cards.map(message => {
      return (
        <Card text={message["card"].text} emoji={message["card"].emoji} />
      );
    });

    return <div>{firstCard}</div>;
  }
}

Board.propTypes = {};

export default Board;
