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
      emoji: EMOJI_LIST[0],
    }
  }

  generateSelectOptions = () => {
    return EMOJI_LIST.map((emojiItem, index) => {
      return <option value={emojiItem} key={index}>{emoji.getUnicode(emojiItem)}</option>
    })
  }

  onChangeSelect = (event) => {
    console.log(`before: ${this.state.emoji}`);
    this.setState({
      emoji: event.target.value,
    });
    console.log(`after: ${this.state.emoji}`);
  }

  onInputChanged = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  onClearForm = () => {

    this.setState({
      text: "",
      emoji: "",
    });
  }

  onSubmitClicked = (event) => {
    event.preventDefault();
    this.props.addCardCallback(this.state);
    this.setState({
      text: "",
      emoji: "",
    });
    console.log(this.state);
  };

  render() {
    return (
      <section className="new-card-form">
        <h3 className="new-card-form__header">Add a New Card</h3>
        <form className="new-card-form__form">
          <label htmlFor="text" className="new-card-form__form-label">Text:</label>
          <textarea name="text" className="new-card-form__form-textarea"
            value={this.state.text}
            onChange={this.onInputChanged}></textarea>

          <label htmlFor="emoji" className="new-card-form__form-label">Emoji:</label>
          <select name="emoji" className="new-card-form__form-select"
            value={this.state.emoji}
            onChange={this.onChangeSelect}>
            {this.generateSelectOptions()}
          </select>

          <input className="new-card-form__form-button"
            type="submit"
            name="submit"
            value="Add Card"
            onClick={this.onSubmitClicked} />
        </form>
      </section>
    );
  }
}



NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
}

export default NewCardForm;