import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {

    return (
      <div className="card card__content">
          
          {this.props.text && <p className="card__content-text">{this.props.text}</p>}
          {this.props.emoji && <p className="card__content-emoji">{emoji.getUnicode(this.props.emoji)}</p>}
    
          <button 
            className="card__delete"
            onClick = { () => this.props.deleteCardCallback(this.props.id) }
            >
              Delete
          </button>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
