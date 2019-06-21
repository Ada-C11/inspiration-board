import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      errorMessage: null,
    };
  }

  componentDidMount() {
    axios.get(`${this.props.url}${this.props.boardName}/cards`)
    .then((response) => {
      const boardCards = response.data.flatMap(card => {
        console.log(card);
        if (card["card"].text || card["card"].emoji) {
          return [{
            ...card,
          }];
        } else {
          return [];
        }
      });
      console.log(boardCards);
      this.setState({ cards: boardCards })
    })
    .catch((error) => {
      this.setState({
        errorMessage: error.message
      })
    })
  }
  render() {

    const errorSection = (this.state.errorMessage) ? 
    (<section className="error">
       Error: {this.state.errorMessage}
     </section>) : null;

    const displayCards = this.state.cards.map((card, i) => {
      return <Card 
                key={i}
                id={card["card"].id}
                text={card["card"].text}
                emoji={card["card"].emoji} />
    })

    return (
      <div className="board">
        { errorSection }
        { displayCards }
      </div>
    )
  }
};

Board.propTypes = {
  url: PropTypes.string,
  boardName: PropTypes.string
};

export default Board;

