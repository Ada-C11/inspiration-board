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
      <div className="card__content">
        <p className='card__content-text'> {this.props.text} </p>
        {emojiUnicode ? (<p className='card__content-emoji'> {emoji.getUnicode(emojiUnicode)} </p>) : ""}
        <button className='card__delete'
        type="button"
        className=""
        aria-label="Close"
        // below lets you define the function on one line
        // another option is to use
        // onClick={this.props.removeCardCallback}
        // and make a function in this Card class called removeCardCallback,
        // which calls the callback function
        onClick={() => this.props.removeCardCallback(this.props.cardId)}
        >
        delete card
        </button>
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
