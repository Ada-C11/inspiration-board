import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  onButtonClick = () => {
    this.props.onDeleteCard(this.props.id);
  }

  render() {
    return (
      <div className="card">
        <section className="card__content">
          <p className="card__content-text">{this.props.quote}</p>
          <p className="card__content-emoji">{this.props.Emoji ? emoji.getUnicode(this.props.Emoji) : ""}</p>
          <button
            type="button" 	          
            className="card__delete" 	          
            type="button"          
            onClick={this.onButtonClick}	
            >Delete         
          </button>
        </section>
      </div>
    )
  }
}

Card.propTypes = {
  quote: PropTypes.string.isRequired,
  emoji: PropTypes.string
};

export default Card;
