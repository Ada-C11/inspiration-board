import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';


import './Card.css';

class Card extends Component {

  displayEmoji = (emojiInput) => {
    if (emojiInput) {
      return (
        emoji.getUnicode(emojiInput)
      )
    } else {
      return (null) 
    }
  }

  render() {
    return (
      <div className="card">
        <p> {this.props.cardText} </p>
        <p> {this.displayEmoji(this.props.cardEmoji)} </p>
        {/* <p> {emoji.unicode} </p> */}
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
