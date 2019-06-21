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
      currentCard: undefined,
      error: null
    };
  }
  
  componentDidMount() {
    const URL = this.props.url +'/'+this.props.boardName+'/cards'
    console.log(URL)
    axios.get(URL)
      .then((response) => {
        this.setState({ cards: response.data });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }
  
  render() {
    const { currentCard, cards } = this.state;
    const {url, boardName} = this.props;
    const cardList = cards.map((cardData) => {
      const {id, text, emoji} = cardData.card;
      return (<Card key={id} text={text} emoji={emoji} /> );
    });

    return (
      <div className ="board">
        {cardList}
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired, 
  boardName: PropTypes.string,
};

export default Board;
