import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  // can I not just delete it here instead of a callback, and the callback just refreshes the page?
  onCardDelete = () => {
    console.log(this.props.card.id);
    // we want it to refresh right?
    // event.preventDefault();
    this.props.deleteCardCallback({
      id: this.props.card.id,
    })

  };


  render() {
    return (
      <div className="card">
        <div className="card__content">
          <div className="card__content-text">
            { this.props.card.text }
          </div>
          <div className="card__content-emoji">
            {(this.props.card.emoji) && (emoji.getUnicode(this.props.card.emoji))}
          </div>

          { console.log(this.props.card) }
          <button 
            className="card__delete" 
            onClick = {this.onCardDelete}
          > Delete Card 
          </button>
        </div>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
