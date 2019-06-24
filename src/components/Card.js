import React, { Component } from "react";
import PropTypes from "prop-types";
import emoji from "emoji-dictionary";

import "./Card.css";

//class Card extends Component {
const Card = props => {
  //console.log(emoji.getUnicode("heart_eyes"));
  const { text, cardEmoji, deleteCardCallBack, id } = props;

  let showEmoji = cardEmoji
  if (cardEmoji) {
    showEmoji = emoji.getUnicode(cardEmoji);
  }
  //render() {

  const toDelete = () => {
    console.log(id);
    return deleteCardCallBack(id);
  };

  return (
    <div className="card">
      <div className="card__content">
        <button type="button" className="card__delete" onClick={toDelete}>
          Delete Card
        </button>
        <div className="card__content">
          <span className="card__content-text">{id}</span>
          <span className="card__content-text">{text}</span>
          <span className="card__content-emoji">{showEmoji}</span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
