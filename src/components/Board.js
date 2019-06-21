import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';
import { isExpressionWrapper, throwStatement } from '@babel/types';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      error: null
    };
  }

  componentDidMount() {
    const {url, boardName } = this.props;
    axios.get(`${url}boards/${boardName}/cards`)
      .then((response) => {
        console.log('In .then!!!!');

        const allCards = response.data.map(element => {
          // if (card) {
          //   return [{
          //     ...card
          //   }];
          // } else {
          //   return [];
          // }
          const card = {
            ...element.card,
          }
          return card;
        });

        this.setState({
          cards: allCards,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message
        });
      })
  }

  render() {
    const allCards = this.state.cards.map((card) => {
      return <Card 
        key={card.id}
        {...card}
        // individualCard={card}
      />
    });
    // const { cards, error } = this.state;

    // const errorSection = (this.state.error) ? 
    // (<section className='error'>
    //   Error: {this.state.error}
    // </section> ) : null;

    return(
      <div className="board">
        {allCards}
        <NewCardForm />
      </div>
    );
  }
}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
