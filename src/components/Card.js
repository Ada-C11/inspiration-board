import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  handleclick =()=>{
    this.props.onDeleteCard(this.props.id)
  }
  render() {
    return (
      <div className="card">
         {this.props.id} - {this.props.text} {this.props.emoji}
        <button
          style={{ color: '#00f' }}
          type="button"
          className="btn btn-danger card__delete"
          aria-label="Close"
          onClick={this.handleclick}
        >
          Delete
        </button>
      </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,

};

export default Card;
