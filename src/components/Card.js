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

  handleButtonClick = (e) => {
    // pass along cardIndex to delete card and remove from API...
    console.log(this.state.card.id)
  }

  render() {
    return (
      <div className="card">
        <h3>{this.state.id}</h3>
        <h4>{this.state.card.text}</h4>
        <h6>{this.state.card.emoji ? emoji.getUnicode(this.state.card.emoji) : null}</h6>
        <button onClick={this.handleButtonClick}>Delete</button>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
