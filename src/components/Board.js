import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';
import { thisExpression } from '@babel/types';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cardList: [],
      currentError: null,
    };
  }

  componentDidMount() {
    axios.get(`${this.props.url}/${this.props.boardName}/cards`)
      .then((response) => {

        this.setState({
          currentError: null,
        });

        const cardList = response.data.map((card) => {


          const newCard = {
            id: card.card.id,
            text: card.card.text,
            emoji: card.card.emoji,
          }
          return newCard;
        });

        // console.log(cardList);

        this.setState({
          cardList,
        });
      })
      .catch((error) => {
        this.setState({
          currentError: error.message,
        });
      })

  };

  addCard = (cardData) => {
    axios.post(`${this.props.url}/${this.props.boardName}/cards`, cardData)
      .then((response) => {
        console.log(response);
        this.setState({ currentError: null });


        const newCardList = this.state.cardList;
        cardData.id = response.data.card.id;
        newCardList.unshift(cardData);

        this.setState({
          cardList: newCardList,
        });

      })

      .catch((error) => {
        this.setState({
          currentError: error.message
        })
    });
    }

  deleteCard = (id) => {
          const allCards = this.state.cardList;
          const index = allCards.findIndex(card => card.id === id);
          allCards.splice(index, 1);

          this.setState({
            cardList: allCards,
          });

          axios.delete(`${this.props.deleteUrl}/${id}`)
            .then((response) => {
              console.log(response);
            })

            .catch((error) => {
              console.log(error);
            })
        };

    displayErrors = () => {
      return <p>
        {this.state.currentError}
      </p>
    }

    renderCards = () => {
      return this.state.cardList.map((card) => {
        return <Card key={card.id}
          id={card.id}
          text={card.text}
          emoji={card.emoji}
          deleteCardCallback={this.deleteCard}
        />
      });
    };

    render() {
      return (
        <div>
          <NewCardForm addCardCallback={this.addCard} />
          <div className="board">
            <section className="validation-errors-display">
              {this.state.currentError ? this.displayErrors() : ""}
            </section>

            {this.renderCards()}
          </div>
        </div>
      )
    }

  }

  Board.propTypes = {
    url: PropTypes.string.isRequired,
    deleteUrl: PropTypes.string.isRequired,
    boardName: PropTypes.string.isRequired,
  };

  export default Board;
