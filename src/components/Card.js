import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    //Change this state latter dont need to do this card
    this.state = {
      cards: props.cards
    };
  }
  
  render() {
    const emoji = require("emoji-dictionary");
    const { id, text, symbol } = this.props
    if (symbol !== null) {
    return (
      <div className="card">
        <p>{text}</p>
        <p>{emoji.getUnicode(symbol)}</p>
      </div>
    )
  } else  {
    return (
      <div className="card">
        <p>{text}</p>
      </div>
    )
  }
  }
}

Card.propTypes = {

};

export default Card;
