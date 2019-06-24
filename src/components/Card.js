import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  onDeleteButtonClick = (event) => {
    // console.log(event.target.id);
    // console.log(this.props.index);
    this.props.deleteCardCallback(this.props.index);
  }
  render() {
  
    return (
      <section className="card">
        <div className="card__content-text card__content">{this.props.quote}</div>
        <div className="card__content-emoji card__content">{this.props.emoji && emoji.getUnicode(this.props.emoji)}</div>
        
        {/* Try single-line conditional rendering here */}
        
        {<button id={this.props.id} className="card__delete" onClick={this.onDeleteButtonClick}>Delete</button>}
      </section>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number,
  index: PropTypes.number,
  quote: PropTypes.string,
  emoji: PropTypes.string,
  deleteCardCallback: PropTypes.func,
};

export default Card;
