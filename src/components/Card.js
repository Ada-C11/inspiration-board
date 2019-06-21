import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';


class Card extends Component {
  
  deleteCard = () => {
      this.props.deleteCardCallback(this.props.id)
  }

  render() {
    console.log(this.props.text)

    return (
      <div className="card">
        <p>{this.props.text}</p>
        <p>{emoji.getUnicode(this.props.emoji)}</p>
        <button onClick={this.deleteCard}>Delete</button>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
