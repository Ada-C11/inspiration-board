import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  onDeleteClick = () => {
    this.props.onDeleteClick(this.props.id)
    console.log(this.props.id)
    console.log(this.props)
    console.log(emoji.getUnicode("beer"))
  }

  render() {
    return (
      <div className="card">
        <h4>{this.props.text}</h4>
        <h4>{emoji.getUnicode(this.props.emoji)}</h4>
        <input 
            type="button" 
            value="Delete" 
            onClick={this.onDeleteClick}
            />
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
