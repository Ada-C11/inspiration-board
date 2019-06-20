import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        {/* Card */}
        <p className = 'card__content-text'> {this.props.text} </p>
        <p className = 'card__content-emoji'> {this.props.emoji} </p>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
