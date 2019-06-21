import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    }
  }

  onRemoveButtonClick = () => {
    this.props.removeCardCallback(this.props.cardId);
  }

  render() {
    return (
      <div className="card">
        <div className="card__content">
          <section className="card__content-text">{this.props.cardMessage}</section>
          <section className="card__content-emoji">
            {emoji.getUnicode(this.props.cardEmoji)}
          </section>
        </div>
        <section type="button" className="card__delete" onClick={this.onRemoveButtonClick}>X</section>
      </div>
    )
  }
}

Card.propTypes = {
  cardMessage: PropTypes.string,
  cardEmoji: PropTypes.string,
  cardId: PropTypes.number,
};

export default Card;
