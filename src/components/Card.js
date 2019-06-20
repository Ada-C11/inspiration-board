import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        {this.props.individualCard}
      </div>
    )
  }
}

Card.propTypes = {
  individualCard: PropTypes.string.isRequired,
};

export default Card;
