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
      console.log(response);

      const allCards = response.data.map((card, i) => {
        return <Card
          key={i}
          id={card.card.id}
          text={card.card.text}
          emoji={card.card.emoji}
        />
      });
      this.setState({cards: allCards});
    })

    .catch((error) => {
      // this.showErrorMessageCallback = () => {
        this.props.showErrorMessageCallback(error)
      // }
    });
  }



  render() {
    return (
      <div>
        Board
        {this.state.cards}

      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
  showErrorMessageCallback: PropTypes.func.isRequired
};

export default Board;
