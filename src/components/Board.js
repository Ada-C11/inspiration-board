import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';
import { thisTypeAnnotation } from '@babel/types';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      error: null, 
    };
  }

  componentDidMount() {
    const getAllCards =  `https://inspiration-board.herokuapp.com/boards/${this.props.boardName}/cards`;

    axios.get(getAllCards)
    .then((response) => {
      console.log('In .then!!');
      this.setState({cards: response.data})
    })
    .catch((error) => {
      this.setState({
        error: error.message
      })
    })
  }

  onDeleteCard = (id) => {
    console.log('Inside of deleteCard!!')
    console.log(id)
    const deleteCardPath = `https://inspiration-board.herokuapp.com/cards/${id}`;
    axios.delete(deleteCardPath)
    .then(() => {
      console.log('inside of then in on delete carddddddd')

      const newCardList = this.state.filter(card => card.id !== id);

      this.setState({cards: newCardList});

    })

    .catch((error) => {
      this.setState({ 
        error: error.message
      });
    });
  }

  addCard = (cardInfo) => {
    const addCardPath = `https://inspiration-board.herokuapp.com/boards/${this.props.boardName}/cards`;

    axios.post(addCardPath, cardInfo)
    .then((response) => {
      this.setState({
        cards: [...this.state.cards, response.data]
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message,
      });
    });
  
  }
   
  

  render() {
    const allCards = this.state.cards.map((card, index) => {
      const { id, text, emoji } = card.card;

      const styledCard = {
        id: id,
        text: text,
        emoji: emoji
      };

      console.log(styledCard.id)
      return (
        <div>
          <div>
          <Card key={index} emoji={emoji} index={index} id={id} text={text} card={styledCard} onDeleteCard={() => this.onDeleteCard(id)}/>
          </div>
        </div>
      )
    });


    const errorSection = (this.state.errorMessage) ? 
    (<section className="error">
       Error: {this.state.errorMessage}
     </section>) : null;

    return (
      <section className="board">
        <div>
          { errorSection }
        </div>
        <div>
          { allCards }
        </div>
        <NewCardForm addCardCallback={this.addCard} />
      </section>
    )
  }

}

Board.propTypes = {
  boardName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Board;
