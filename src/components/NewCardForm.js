import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      emoji: "",

    }
  }

  onInputChange = (event) => {
    console.log(this.state[event.target.name])
    const updatedState = {};
    updatedState[event.target.name] = event.target.value;
    this.setState(updatedState);
  }

  generateSelectOptions() {
    return EMOJI_LIST.map((emojiText, i) => {
      return <option
        key={i}
        value={emojiText}>{emoji.getUnicode(emojiText)}</option>
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.addCardCallback(
      {
        text: this.state.text,
        emoji: this.state.emoji,

      });

  }

  render() {
    const emojiOptions = this.generateSelectOptions();
    return (
      <form
        className="new-card-form new-card-form__form "
        onSubmit={this.onFormSubmit}>>

        <h3 className="new-card-form__header">New Card Form</h3>
        <label className="new-card-form__form-label" htmlFor="fullName">Text:</label>
        <input className="new-card-form__form-textarea" name="text" type="text" value={this.state.text} onChange={this.onInputChange} />
        <select className="new-card-form__form-select">
          {emojiOptions}
        </select>
        <input className="btn btn-success new-card-form__form-button" type="submit" name="submit" value="Add a Card" />
      </form>
    )
  }
}


export default NewCardForm;