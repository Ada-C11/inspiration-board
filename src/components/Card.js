import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {

    console.log(this.props);
    return (
      <div className="card">
        Card

      </div>
    )
  }
}

Card.propTypes = {
  quote: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card;
