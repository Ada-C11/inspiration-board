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

  onDeleteButtonClick= (cardID) => {
      axios.delete(`https://inspiration-board.herokuapp.com/cards/${cardID}`)
        .then((response) => {
          this.getCards();
        })
        .catch((error) => {
          console.log(error);
          this.setState({
            error: error.message
          });
        })
  }
  getCards() {
    axios.get(`${this.props.url}${this.props.boardName}/cards`)
      .then((response) => {
        console.log(response);
        const updatedCards = response.data.map((object)=>{
          return (
              <Card 
                id={object.card.id} 
                key={object.card.id}
                text={object.card.text} 
                emoji={object.card.emoji}
                deleteButtonCallback={this.onDeleteButtonClick}/>);
        });
        this.setState({
          cards: updatedCards,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: error.message
        });
      })
  }
  componentDidMount() {
    this.getCards();
  }

  render() {
    return (
      <div className="board">
        <div className="validation-errors-display">
          {this.state.error ? this.state.error : null}
        </div>
        {this.state.cards}
      </div>

    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
