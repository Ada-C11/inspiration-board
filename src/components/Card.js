import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    // console.log('hi')
    // console.log(emoji.getUnicode(this.props.emoji));
    // console.log(this.props.emoji.unicode)
    // console.log(this.props.emoji)
    return (
      <div className="card">
        <h4>{this.props.text}</h4>
        <h4>{this.props.emoji}</h4>
        
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
