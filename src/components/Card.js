import React, { Component } from "react";
import PropTypes from "prop-types";
import emoji from "emoji-dictionary";

import "./Card.css";

class Card extends Component {
  onDeleteClicked = () => {
    this.props.onDeleteCardCallback(this.props.id);
  };

  render() {
    return (
      <div className="card">
        <section>
          <button
            type="button"
            className="btn btn-danger"
            aria-label="Close"
            onClick={this.onDeleteClicked}
          >
            Delete
          </button>
        </section>
        {this.props.text}
        {this.props.emoji}
      </div>
    );
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  onDeleteClicked: PropTypes.func
};

export default Card;
