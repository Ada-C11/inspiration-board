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
        <section className="card__content">
          <button 
            type="button"
            className="card__delete">
            x
          </button>
          <p className="card__content-text">{text}</p>
          <p className="card__content-emoji">{emoji.getUnicode(symbol)}</p>
        </section>
      </div>
    )
  } else  {
    return (
      <div className="card">
         <section className="card__content">

            <button 
            type="button"
            className="card__delete">
            x
            </button> 

            <p className="card__content-text">
            {text}
            </p>

        </section>
      </div>
    )
  }
  }
}

Card.propTypes = {

};

export default Card;
