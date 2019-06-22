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
      error: null
    };
  }
  
  componentDidMount() {
    const URL = this.props.url +'/'+this.props.boardName+'/cards'
    axios.get(URL)
      .then((response) => {
        this.setState({ cards: response.data });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }
 
    onDeleteCard = (cardId) => {
      const cardsUrl = this.props.cardsUrl+cardId
      axios.delete(cardsUrl)
        .then((response) => {
          const newCardList = this.state.cards.filter(cardData => cardData.card.id !== cardId);
          this.setState({
            cards: newCardList
          });
        })
        .catch((error) => {
          this.setState({ error: error.message });
        });
    }
    addCard = (cardInfo) => {
      const URL = this.props.url +'/'+this.props.boardName+'/cards'
      console.log(cardInfo)
      axios.post(URL, cardInfo)
      .then((response) => {
        let updatedData = this.state.cards;
        updatedData.push(response.data);
        this.setState({cards: updatedData});
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
    }

  render() {
    const { cards } = this.state;
    const cardList = cards.map((cardData) => {
      const {id, text, emoji} = cardData.card;
      return (<Card key={id} id={id} text={text} emoji={emoji} onDeleteCard={this.onDeleteCard}/> );
    });

    const errorSection = (this.state.error) ? 
    (<section className="error">
       Error: {this.state.error}
     </section>) : null;

    return (
      <section>
        {errorSection}
        <div className ="board">
          {cardList}
        </div>
        <div>
          <NewCardForm addCard={this.addCard}/>
        </div>
      </section>
    )
  }
}

Board.propTypes = {
  url: PropTypes.string.isRequired, 
  boardName: PropTypes.string,
};

export default Board;
