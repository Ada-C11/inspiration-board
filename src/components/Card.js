import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';
import { prototype } from 'events';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <section className="card__content">
          {this.props.text && <div className="card__content-text">{this.props.text}</div>}
          {this.props.emoji && <div className="card__content-emoji">{emoji.getUnicode(this.props.emoji)}</div>}
        </section>
        <section>
          <button className="card__delete" onClick={() => this.props.deleteCardCallback(this.props.id)}>Delete</button>
        </section>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteCardCallback: PropTypes.func,
  key: PropTypes.number,
  id: PropTypes.number
};

export default Card;
