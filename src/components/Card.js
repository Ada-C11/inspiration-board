import React, { Component } from "react";
import PropTypes from "prop-types";
import emoji from "emoji-dictionary";


import "./Card.css";

class Card extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sentence: ""
    };

  }


  render() {
    return <div className="card">{this.props.text}{this.props.emoji}</div>;
  }
  
}

export default Card;
