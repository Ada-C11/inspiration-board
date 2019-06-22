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
    axios.get(`${this.props.url}boards/${this.props.boardName}/cards`)
    .then((response) => {
      this.setState({ cards: response.data })
      console.log(this.state.cards);
    })
    .catch((error) => {
      this.setState({
        errorMessage: error.message
      })
    })
  }

  onDeleteCard = (cardId) => {
    axios.delete(`${this.props.url}cards/${cardId}`)
      .then((response) => {
        let newCardList = this.state.cards.filter(card => card["card"].id !== cardId);
        this.setState({ cards: newCardList });
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message
        });
      });
  }

  addCardCallback = (card) => {
    const cardDataToSendToApi = {
      text: card.text,
      emoji: card.emoji,
    };

    axios.post(`${this.props.url}boards/${this.props.boardName}/cards`, cardDataToSendToApi)
      .then((response) => {
        console.log("This is what response.data looks like from the API on a successful response", response.data)
        let updatedCardList = this.state.cards;
        updatedCardList.push({
          card: {
          id: card.id,
          text: card.text,
          emoji: card.emoji,
        }});
        this.setState({
          cards: updatedCardList,
        });
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message
        });
      });
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
                emoji={card["card"].emoji}
                onDeleteCardCallback={this.onDeleteCard} />
    })

    return (
      <section>
        <div className="board">
          { errorSection }
          { displayCards }
        </div>
        <div>
          < NewCardForm 
            addCardCallback={this.addCardCallback}/>
        </div>
      </section>
    )
  }
};

Board.propTypes = {
  url: PropTypes.string,
  boardName: PropTypes.string
};

export default Board;

