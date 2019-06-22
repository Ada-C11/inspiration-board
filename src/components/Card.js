import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {




  render() {
    return (
      <div className="card">
        <div className="card__content">
          <div className="card__content-text">
            { this.props.cardText }
          </div>
          <div className="card__content-emoji">
            {(this.props.cardEmoji) && (emoji.getUnicode(this.props.cardEmoji))}
          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
