import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  handleButtonClick = () => {
    // pass along cardIndex to delete card and remove from API...
    this.props.deleteCardCallback(this.props.cardIndex, this.props.card.id) 
  }

  render() {
    return (
      <div className="card">
        <h3>{this.props.id}</h3>
        <h4>{this.props.card.text}</h4>
        <h6>{this.props.card.emoji ? emoji.getUnicode(this.props.card.emoji) : null}</h6>
        <button onClick={this.handleButtonClick}>Delete</button>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
