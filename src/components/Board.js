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
    };
  }


  render() {
    const cardComponents = 
    CARD_DATA["cards"].map( (card, i) => {
     return (
       <div key={i}>
         {/* need to have it accept card["emoji"] as well */}
         <Card cardText={card["text"]} cardEmoji={card["Emoji"]}/>
       </div>
     )
   });
    return (
      <div>
        { cardComponents }
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
