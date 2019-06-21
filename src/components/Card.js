import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  onDeleteButtonClick = () => {
    console.log("Boing boing!");
  }
  render() {
  
    return (
      <div className="card">
        {this.props.quote}
        {/* Try single-line conditional rendering here */}
        {this.props.emoji && emoji.getUnicode(this.props.emoji)}
        {<button className="card__delete" onClick={this.onDeleteButtonClick}>Delete</button>}
      </div>
    )
  }
}

Card.propTypes = {
  quote: PropTypes.string,
  emoji: PropTypes.string,
  deleteCardCallback: PropTypes.func,
};

export default Card;
