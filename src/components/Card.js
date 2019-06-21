import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';


import './Card.css';

class Card extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {

  //   }
  // }
  isEmoji = (emoji) => {
    console.log(this.props.emoji)
    if (this.props.emoji !== undefined) {
      return this.props.emoji
    } else {
      return ""
    }
  }

  

  render() {
    console.log(this.props.quote)
    const isQuote = (this.props.quote) ? this.props.quote : ""
    const isEmoji = (this.props.emoji) ? this.props.emoji : ""
    return (
      <div className="card">
        <div className="card__content">
          <div className="card__content-text">
            {this.props.quote}
          </div>
          <div className="card__content-emoji">
            {emoji.getUnicode(isEmoji)}
          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  quote: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card;
