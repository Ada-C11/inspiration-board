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
      errorMessage: null,
      // cards: CARD_DATA.cards,
    };
  }

  componentDidMount() {
    axios.get(`${this.props.url}/${this.props.boardName}/cards`)
      .then((response) => {
        this.setState({ cards: response.data });
        console.log('response.data is', response.data)
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message
        })
        console.log(error.message)
      })
  }

  render() {

    const errorSection = (this.state.errorMessage) ?
      (<section className="validation-errors-display">
        Error: {this.state.errorMessage}
      </section>) : null;


    const cardComponents = this.state.cards.map((card, i) => {
      return (
        <div key={i}>
          <Card
            text={card.card.text}
            cardEmoji={card.card.emoji} />
        </div>

      )
    });

    return (
      <section>
        <div>
          {errorSection}
        </div>
        <div>
          {cardComponents}
        </div>
      </section>
    )
  }

}

Board.propTypes = {

};

export default Board;
