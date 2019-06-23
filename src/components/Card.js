import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  // const {} = props;
  // can use above to make props available as variables
  // then replace all the props.variableName with variableName below
  render() {
    // console.log(this.props);
    const emojiUnicode = this.props.emoji;
    // const tempEmoji = emoji.getUnicode("heart_eyes_cat")
    return (
      <div className="card">
        <button
        type="button"
        className=""
        aria-label="Close"
        // onClick={removeCardCallback(id)}
        onClick={() => this.props.removeCardCallback(this.props.cardId)}
        >
        x
        </button>

        <p> {this.props.text} </p>

        {emojiUnicode ? (<p> {emoji.getUnicode(emojiUnicode)} </p>) : ""}
      </div>
    )
  }
}

Card.propTypes = {
  cardId:PropTypes.number,
  text: PropTypes.string,
  emoji: PropTypes.string,
  removeCardCallback: PropTypes.func
};

export default Card;
