import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';


class Card extends Component {

  render() {
    let foundEmoji = ""
    if(this.props.content["emoji"]){
      foundEmoji = emoji.getUnicode(this.props.content["emoji"])
    }
    return (
      <div className="card">
        {this.props.content["text"]}
        {foundEmoji}
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
