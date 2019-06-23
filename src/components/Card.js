import React, { Component } from "react";
import PropTypes from "prop-types";
import emoji from "emoji-dictionary";

import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      card: ""
    };
  }

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

export default Card;
