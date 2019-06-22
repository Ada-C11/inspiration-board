import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  render() {
    console.log(this.props);
    const emojiUnicode = this.props.emoji;
    // const tempEmoji = emoji.getUnicode("heart_eyes_cat")
    return (
      <div className="card">
        <p> {this.props.text} </p>
        {emojiUnicode ? (<p> {emoji.getUnicode(emojiUnicode)} </p>) : ""}
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
