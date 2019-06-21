import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card__content">
          { this.props.text }
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  card: PropTypes.string.isRequired,
};

export default Card;
