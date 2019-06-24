import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  renderCards = () => {
    const cards = this.state.cards.map(card => <Card text={card.text} card={card.emoji}/>);
    return cards; 
  }

  addCards = () => {
    this.setState({
      cards: CARD_DATA.cards
    });
  }

  componentDidMount() {
    this.addCards();
  //   axios.get(`${this.props.url}${this.props.boardName}`)
  //     .then((response) => {

  //     })
  //     .catch((error) => {

  //     });
  }

  render() {
    return (
      <div>
        {this.renderCards()}
      </div>
    )
  }

}

Board.propTypes = {
  name: PropTypes.string,
};

export default Board;
