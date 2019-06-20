import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props){
    super(props)
    this.state = {
      card: ''
    }
  }
  render() {
    return (
      <div className="card">
        
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
