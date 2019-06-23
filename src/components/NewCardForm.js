import React, { Component } from "react";
import PropTypes from "prop-types";
import emoji from "emoji-dictionary";
import "./NewCardForm.css";

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      emoji: "",
      isDirty: false
    };
  }

  EMOJI_LIST = [
    "",
    "heart_eyes",
    "beer",
    "clap",
    "sparkling_heart",
    "heart_eyes_cat",
    "dog"
  ];

  onInputChange = event => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  };

  onFormSubmit = () => {
    const newCard = {
      text: this.state.text,
      emoji: this.state.emoji
    };

    if (this.hasValidText()) {
      this.props.addCardCallback(newCard);
    }

    this.setState({ isDirty: true });
  };

  hasValidText = () => {
    return this.state.text !== "";
  };

  textRequired = () => {
    if (this.hasValidText()) {
      return null;
    } else if (this.state.isDirty) {
      return <div>Error: Test is required</div>;
    }
  };

  render() {
    return (
      <form className="new-card-form">
        <h3 className="new-card-form__header">Add a Card</h3>
        <div className="new-card-form__form">
          {this.textRequired()}
          <label htmlFor="new-card-form__form-label">Text:</label>
          <input
            name="text"
            value={this.state.text}
            onChange={this.onInputChange}
          />
        </div>
        <div>
          <label htmlFor="new-card-form__form-label">Emoji:</label>
          <select
            name="emoji"
            value={this.state.emoji}
            onChange={this.onInputChange}
          >
            {this.EMOJI_LIST.map((item, i) => (
              <option key={i}>{emoji.getUnicode(item)}</option>
            ))}
          </select>
        </div>
        <input
          onClick={this.onFormSubmit}
          className="btn btn-success new-card-form__form-button"
          type="button"
          name="submit"
          value="Add a Card"
        />
      </form>
    );
  }
}

export default NewCardForm;
