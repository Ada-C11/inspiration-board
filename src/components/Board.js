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

  componentDidMount() {
    const { url, boardName } = this.props;
    const cardsEndpoint = url + boardName + '/cards';

    axios.get(cardsEndpoint)
      .then((response) => {
        const cardsList = response.data.map((card, i) => {
          return <Card
            key={i}
            text={card.card.text}
            emoji={card.card.emoji}
          />
        });
        this.setState({cards: cardsList});
      })

      .catch((error) => {
        console.log(error);
      })

  }

  render() {
    return (
      <div>
        <div>
          Board
      </div>
        <div className='card-container'>
          {this.state.cards}
        </div>
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
