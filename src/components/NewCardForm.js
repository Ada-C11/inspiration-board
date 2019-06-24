import React, { Component } from "react";
import PropTypes from "prop-types";
import emoji from "emoji-dictionary";
import "./NewCardForm.css";

const EMOJI_LIST = [
  "",
  "heart_eyes",
  "beer",
  "clap",
  "sparkling_heart",
  "heart_eyes_cat",
  "dog",
  "pizza",
  "see_no_evil",
  "apple",
];

const emojiList = EMOJI_LIST.map((oneEmoji, i) => {
        return <option key={i} value={oneEmoji}>{emoji.getUnicode(oneEmoji)}</option>
});


class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      emoji: '',
    }
  }

  addNewCard = (event) => {
    event.preventDefault();

    const card = this.state;

    this.props.addCardCallback(card);
  };

  inputChange = (event) => {
    const stateUpdate = {};

    const field = event.target.name;
    const value = event.target.value;

    stateUpdate[field] = value;
    this.setState(stateUpdate);
  };

  render() {
    return (
      <section className="new-card-form">
        <form className="new-card-form__form" onSubmit={this.addNewCard}>
          <h3 className="new-card-form__header">Add a Card</h3>
          <label className="new-card-form__form-label">
            Text:
            <input
              className="new-card-form__form-textarea"
              name="text"
              type="text"
              value={this.state.text}
              onChange={this.inputChange}
            />
          </label>
          <label className="new-card-form__form-label">
            Emoji:
            <select
              className="new-card-form__form-select"
              name="cardEmoji"
              value={this.state.cardEmoji}
              onChange={this.inputChange}
            >
              <option value="">Select an Emoji</option>
              {emojiList}
            </select>
          </label>
          <input
            className="new-card-form__form-button"
            type="submit"
            name="submit"
            value="Add a Card"
          />
        </form>
      </section>
    );
  }
}

NewCardForm.propTypes = {
addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
