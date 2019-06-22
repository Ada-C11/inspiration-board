import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog", "cat"]

class NewCardForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      emoji: '',

    }
  }

  onInputChange = (event) => {
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
    this.setState({
      text: '',
      emoji: ''
    })


  }

  render() {
    const emojiOptions = this.generateSelectOptions();
    return (
      <div>
        <h3 className="new-card-form__header">New Card Form</h3>
        <form
          className="new-card-form new-card-form__form "
          onSubmit={this.onFormSubmit}>

          <label className="new-card-form__form-label" htmlFor="text">Text:</label>
          <input className="new-card-form__form-textarea" name="text" type="text" value={this.state.text} onChange={this.onInputChange} />
          <label className="new-card-form__form-label" htmlFor="emoji">Emoji:</label>
          <select className="new-card-form__form-select" name="emoji" value={this.state.emoji ? this.state.emoji : 'select emoji'} onChange={this.onInputChange}>
            <option value="select emoji">Select emoji!</option>
            {emojiOptions}
          </select>
          <input className="new-card-form__form-button" type="submit" name="submit" value="Add a Card" />
        </form>
      </div>
    )
  }
}


export default NewCardForm;