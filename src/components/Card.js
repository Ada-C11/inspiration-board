import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    
    return (
      <div className="card">
        {this.props.text}
        <button
          type="button"
          className="btn btn-danger card--delete-btn"
          aria-label="Delete" onClick={this.props.onDeleteCard}>
            Delete
        </button>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Card;
