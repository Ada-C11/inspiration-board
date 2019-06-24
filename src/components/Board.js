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
    axios.get(`${this.props.url}${this.props.boardName}/cards`)
      .then((response) => {
        console.log(response);
        const updatedCards = response.data.map((object)=>{
          return (<Card text={object.card.text} emoji={object.card.emoji}/>);
        });
        this.setState({
          cards: updatedCards,
        });
      })
      .catch((error) => {
        this.setState({
          cards: ["Failed to load cards"]
        });
      })
  }

  render() {
    return (
      <div>
        {this.state.cards}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
