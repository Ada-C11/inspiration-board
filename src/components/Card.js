import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';
import Axios from 'axios';

class Card extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: props.id, 
      text: props.text, 
      emoji: props.emoji ? props.emoji : '',
    }
  }

  render() {
    
    return (
      <div className="card">
        <section className="card__content">
          <p className="card__content-text">{this.state.text}</p>
          <p className="card__content-text">{emoji.getUnicode(this.state.emoji)}</p>
        </section>
        Card
      </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  emoji: PropTypes.string,

};

export default Card;
