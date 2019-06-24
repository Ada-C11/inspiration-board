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

  onDeleteButtonClick = (cardID) => {
      axios.delete(`https://inspiration-board.herokuapp.com/cards/${cardID}`)
        .then((response) => {
          this.getCards();
        })
        .catch((error) => {
          if (error.response && error.response.data) {
            this.setState({
              error: error.response.data.cause,
            });
          } else {
            this.setState({
              error: error.message,
            });
          }
        })
  }

  addNewQuote = (text, emoji) =>{
    axios.post(`${this.props.url}${this.props.boardName}/cards`, { text, emoji,})
    .then((response) => {
      this.getCards();
    })
    .catch((error) => {
      console.log([error]);
      if (error.response && error.response.data) {
        this.setState({
          error: error.response.data.cause,
          validationErrors:error.response.data.errors
        });
      } else {
        this.setState({
          error: error.message,
          
        });
      }
    })
  }
  
  getCards() {
    axios.get(`${this.props.url}${this.props.boardName}/cards`)
      .then((response) => {
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
          error: null,
          validationErrors: null
        });
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          this.setState({
            error: error.response.data.cause,
          });
        } else {
          this.setState({
            error: error.message,
          });
        }
      })
  }

  displayValidationErrors = (errors) => {
    let errorList = [];
    for (const field in errors) {
      for (const problem of errors[field]) {
        errorList.push(<li>{field}: {problem}</li>);
      }
    }
      return errorList;
  }
  
  componentDidMount() {
    this.getCards();
  }

  render() {
    return (
      <div>
        <div className="validation-errors-display">
          {this.state.error ? this.state.error : null}
          <ul className="validation-errors-display__list">
            {this.state.validationErrors ? this.displayValidationErrors(this.state.validationErrors) : null}
          </ul>
          
        </div>
        <div className="board">
          {this.state.cards}
          <NewCardForm submitCallback={this.addNewQuote}/>
      </div>
      </div>
      

    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
