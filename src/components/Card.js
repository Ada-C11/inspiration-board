import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  constructor(props) {
    super(props);
    this.onDeleteClicked = this.onDeleteClicked.bind(this);
  }

  onDeleteClicked() {
    this.props.deleteCallback(this.props.id);
  }

  render() {
    let emojiSymbol = "";
    if (this.props.emoji) {
      emojiSymbol = emoji.getUnicode(this.props.emoji);
    }

    return (
      <div className="card">
        <div className="card__content">
          <div className="card__content-text">
            {this.props.text}
          </div>
          <div className="card__content-emoji">
            {emojiSymbol}
          </div>
        </div>
        <div className="card__delete">
          <button onClick={this.onDeleteClicked}>
            delete
          </button>
        </div>
      </div>
    )
  }
}

// Card.propTypes = {
//   text: PropTypes.string.isRequired,
//   //emoji: PropTypes.emoji.isRequired
// };

export default Card;
