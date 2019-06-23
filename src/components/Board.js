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
  }

  componentDidMount() {
    axios.get(this.props.url + this.props.boardName + "/cards")
    .then((response) => {
      // console.log("response");
      const cards = response.data.map((card, i) => {
        return card.card
      });

      this.setState({
        cards,
      });
    });
  }
  


  render() {
    const allCards = this.state.cards.flatMap((card, i) => {
      return <Card
                key={i}
                text={card.text}
                emojiText={card.Emoji? card.Emoji : card.emoji}/>
    });
    return (
      <div>
        {allCards}
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
