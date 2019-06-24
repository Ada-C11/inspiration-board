import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  onDeleteButtonClick= (event) => {
    event.preventDefault();
    this.props.deleteButtonCallback(this.props.id);
  }
  render(props) {
    return (
      <div className="card" id={this.props.id}>
        <div className="card__content">
          <p className = "card__content-text">{this.props.text ? this.props.text : null}</p>
          <p className="card__content-emoji">{this.props.emoji ? emoji.getUnicode(this.props.emoji) : null}</p>
          <button className="card__delete" onClick={this.onDeleteButtonClick}>Delete</button>
        </div>
        
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteButtonCallback: PropTypes.func.isRequired
};

export default Card;
