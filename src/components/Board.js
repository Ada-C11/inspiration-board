import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm'
import emoji from 'emoji-dictionary';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      emoji: '',
      text: '',
    };
  }

  renderBoard() {
    axios.get(`${this.props.url}${this.props.boardName}/cards`)
    .then((response) => {
      console.log(response.data); 
      this.setState({cards: response.data});
      console.log(this.state.cards);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount() {
    this.renderBoard();
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state.text, this.state.emoji);
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state.text, this.state.emoji);
    axios.post(`${this.props.url}${this.props.boardName}/cards`, {
      text: this.state.text, 
      emoji: this.state.emoji
    })
    .then((response) => {
      console.log("Submitted ", response.data);
      this.renderBoard();
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  onDelete = (id, e) => {
    e.preventDefault();
    console.log(id);
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
    .then((response) => {
      console.log(response.data);
      this.renderBoard();
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  renderCards(data) {
    console.log(data);
    return data ? data.map((elem, i) => (
      <Card key={i}
        id={elem.card.id}
        text={elem.card.text ? elem.card.text : ''}
        emoji={elem.card.emoji ? emoji.getUnicode(elem.card.emoji) : ''}
        onDelete={this.onDelete}
      />
    )) : ''
  }


  render() {
    return (
      <div>
        <div>
          <NewCardForm
            emoji={this.props.emoji}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            text={this.props.text}
          />
        </div>
        <div>
          {this.renderCards(this.state.cards)}
        </div>
      </div>
    )
  }

}

Board.propTypes = {
  cards: PropTypes.object,
  emoji: PropTypes.string,
  text: PropTypes.string,
};

export default Board;
