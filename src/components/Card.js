import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props){
    super(props)
    console.log(props);
    this.state = {
      card: props.card
    }
  }

  render() {
    return (
      <div className="card">
        <h3>{this.state.id}</h3>
        <h4>{this.state.card.text}</h4>
        <h6>{this.state.card.emoji}</h6>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
