import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {

  const {text, emoji, id, onDeleteCard} = props

    return (
      <div className="card">
        <div className="card__content">
          <div className="card__content-text">
            { text }
          </div>
          <div className="card__content-text">
            { emoji }
          </div>
          {/* <div className="card__content-text">
            { id }
          </div> */}
          <button type="button" className="card__delete" onClick={onDeleteCard}>
            Grab Card
          </button>
        </div>
      </div>
    )
}


export default Card;
