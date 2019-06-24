import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';


class Card extends Component {

  onDelete = () => {
    this.props.deleteCardCallBack(this.props.id)
  }

  render() {
    let foundEmoji = ""
    if(this.props.emoji){
      
      foundEmoji = emoji.getUnicode(this.props.emoji)
    }
    return (
      <div className="card">
        <div className="card__content">
        <div className="card__content-text"> {this.props.text}</div>
        <div className="card__content-emoji"> {foundEmoji}</div>
        </div>
        <button className="btn btn-primary card__delete" onClick={this.onDelete} >
            Delete
        </button>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteCardCallBack: PropTypes.func.isRequired
};

export default Card;
