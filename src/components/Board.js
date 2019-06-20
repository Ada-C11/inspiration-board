import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      cardText: 'hello!'
    };
  }

  componentDidMount() {
    axios.get(this.props.url + this.props.boardName)
      .then((response) => {
        console.log("Here is my response!!!!!!!!!!", response);

        // const pets = response.data.flatMap(pet => {
        //   if (pet.name && pet.breed && pet.about) {
        //     return [{
        //       ...pet,
        //       species: pet.breed.toLowerCase()
        //     }];
        //   } else {
        //     return [];
        //   }
        // });

        // this.setState({ petList: pets });

        const cards = response.data.map(card => {

          return [
            {
              ...card
            }];
        })
        this.setState({
          cards: cards
        })

      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message
        })
      })
      console.log('here are all your cards!!!!!', this.state.cards)
    }
    


  render() {
    return (
      <div>
        Board

        <div>
          <Card text={this.state.cardText} />
        </div>
        <div>
          <Card text={this.state.cardText} />
        </div>
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
