import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';


class Card extends Component {

  onDelete = () => {
    this.props.deleteCardCallBack(this.props.content["card"]["id"])
  }

  render() {
    let foundEmoji = ""
    if(this.props.content["card"]["emoji"]){
      foundEmoji = emoji.getUnicode(this.props.content["card"]["emoji"])
    }
    return (
      <div className="card">
        <div className="card__content">
        {this.props.content["card"]["text"]}
        {foundEmoji}
        </div>
        <button 
          className="btn btn-primary card__delete" onClick={this.onDelete}
          >
            Delete
        </button>
      </div>
    )
  }
}

Card.propTypes = {
  content: PropTypes.object.isRequired
};

export default Card;
