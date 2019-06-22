import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const emojis = emoji

class Card extends Component {
  render() {
    const {id, text, emoji} = this.props.card
    
    return (
      <section className="card">
        <h4>{text}</h4>

        {/* If there is an emoji, display it */}
        { emoji &&
          <div className='card__content-emoji'>{emojis.getUnicode(emoji)}</div>
        }

        <button onClick={() => this.props.deleteCallback(id)} type="button"
              className = "card__delete">Delete</button>
      </section>
    )
  }
}

Card.propTypes = {
  deleteCallback: PropTypes.func
};

export default Card;
