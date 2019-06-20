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
      // cards: [
      //   "Good Job!", 
      //   "You're awesome!",
      //   "You Matter!",
      //   "Take a Deep Breath and let the stress melt away"
      // ],
      cards: [],
      error: null
    };
  }

  componentDidMount() {
    const {url, boardName } = this.props;
    axios.get(`${url}/boards/${boardName}/cards`)
      .then((response) => {
        console.log('In .then!!!!');

        const allCards = response.data.map(card => {
          if (card) {
            return [{
              ...card
            }];
          } else {
            return [];
          }
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
    // const mappedCards = this.state.cards.map((card, i) => {
    //   return <Card 
    //     key={i}
    //     individualCard={card}
    //   />
    // });
    const { cards, error } = this.state;

    const errorSection = (this.state.error) ? 
    (<section className='error'>
      Error: {this.state.error}
    </section> ) : null;

    return(
      <div>
        {/* {mappedCards} */}
        <Card 
          individualCard={this.state.cards}
        />
      </div>
    );
  }
}

Board.propTypes = {
  url: PropTypes.string.isRequired
};

export default Board;
