import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import axios from 'axios';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  // 

  onClickDelete = () => {
    this.props.deleteCardCallback(this.props.id);
  }

  render() {
    return (
      //.card__delete somewhere
      <div className="card">
        <p onClick={this.onClickDelete} className='card__delete'>x</p>
        <div className='card__content'>
          <p className='card__content-text'>{this.props.text}</p>
          <p className='card__content-emoji'>{emoji.getUnicode(this.props.emoji)}</p>
        </div>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
