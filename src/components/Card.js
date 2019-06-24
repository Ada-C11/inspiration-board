import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  constructor(props){
    super(props)
    this.state={
      id: this.props.id,
      text: this.props.text,
      emoji: this.props.emoji,
    }
    
  }

  onDeleteCard = () => {
 
    this.props.onDeleteCardCallback(this.state.id)
  }



  render() {
    
    let emojiIcon;
    if (this.props.emoji !== undefined){
      emojiIcon = emoji.getUnicode(this.state.emoji || '')
    }
  
    return (
      <div className="card">
        <section className="card__content">
          <button className="card__delete" onClick={this.onDeleteCard}>x</button>
          <p className="card__content-text">{this.state.text || ''}</p>
          <p className="card__content-emoji">{emojiIcon}</p>
        
        </section>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
};

export default Card;
