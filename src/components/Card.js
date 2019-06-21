import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  onButtonClick = () => {
    this.props.onDeleteCard(this.props.id);
     
  }
  render() {
    let emojiUnicode = this.props.emoji
    if (emojiUnicode){
      emojiUnicode = emoji.getUnicode(emojiUnicode)
    }
    const {text} = this.props;
    return (
      
      <div className="card">
        <div className="card__content">
          <p className= "card__content-text"> {text}</p>
          <p className="card__content-emoji"> {emojiUnicode} </p>
          {/* <button className="card__delete" onClick={() => onDeleteCard(id)} >Delete</button> */}
          <button className="card__delete" onClick={this.onButtonClick} >Delete</button>

        </div>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card;
