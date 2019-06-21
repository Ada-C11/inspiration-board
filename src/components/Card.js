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

          </div>
          <div className="card__content-emoji">

          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
