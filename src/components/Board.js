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
      // error: null
    };
    console.log('cards in state: ', this.state.cards);
  }


  componentDidMount() {
    axios.get(`${this.props.url}/${this.props.boardName}/cards`)
    .then((response) => {
      console.log(response);
      this.setState({cards: response.data});

      //     const pets = response.data.flatMap(pet => {
      //       if (pet.name && pet.breed && pet.about) {
      //         return [{
      //           ...pet,
      //           species: pet.breed.toLowerCase()
      //         }];
      //       } else {
      //         return [];
      //       }
      //     });
      //
      //     this.setState({ petList: pets });
      //   })

    })

    .catch((error) => {
      this.showErrorMessageCallback = () => {
        this.props.showErrorMessage(error)
      }

    });
  }



  allCards = CARD_DATA.cards.map((card, i) => {
    // console.log(`This Card: ${JSON.stringify(card)}`);
    // this.state.cards.push(card);
    // console.log(`test in board's state ${this.state.test}`);
    return <Card
      key={i}
      text={card.text}
      // text={message}
      emoji={card.emoji}
    />
  });

  // setState({
  //   this.state.cards: allCards
  // )};

  render() {
    return (
      <div>
        Board
        {this.allCards}

      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
  showErrorMessageCallback: PropTypes.func
};

export default Board;
