import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import './Board.css';
import Card from './Card';

class Board extends Component {
  render() {
    let cards = this.props.cards.map(card => <Card
        id = {card.id}
        text = {card.text}
        emoji = {card.emoji}
        deleteCallback = {this.props.deleteCardCallback}
      />);

    return (
      <div>
        Chantal's Board
        {/* displays the cards on the board */}
        <div className="board">
          {cards}
        </div>
      </div>
    )
  }
}

// Board.propTypes = {

// };

export default Board;
