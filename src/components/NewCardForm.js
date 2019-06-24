import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      emoji: "",
    };
  }

  addQuote = (event) => {
    event.preventDefault();
    const quote = {
      text: this.state.text,
      emoji: this.state.emoji
    }

    console.log(quote)
    this.props.addQuoteCallback(quote);
    this.clearForm();
  }

  clearForm = () => {
    const updatedState = this.state;
    updatedState.text = "" ;
    updatedState.emoji = "" ;
    this.setState(updatedState);
  }

  onInputChange = (event) => {
    const updatedState = {};
    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    console.log(updatedState)
    this.setState(updatedState);
  }

  render() {
    return (
      <div className="new-card-form">
        <h3 className="new-card-form__header">Add an inspirational quote!</h3>
        <form
          className="new-card-form__form"
          onSubmit={this.addQuote}
        >
          <label className="new-card-form__form-label" >
            Text:
            <textarea
              className="new-card-form__form-textarea"
              name='text'
              type='text'
              value={this.state.text}
              onChange={this.onInputChange}
            ></textarea>
          </label>
          <label className="new-card-form__form-label" >
            Emoji:
            <select 
              className="new-card-form__form-select"
              name="emoji"
              value={this.state.species}
              onChange={this.onInputChange}
              >
                { EMOJI_LIST.map(symbol => <option value={symbol}>{emoji.getUnicode(symbol)}</option>) }
            </select>
          </label>
          <input 
            className="new-card-form__form-button" 
            type="submit" 
            name="submit" 
            value="Add quote" />
        </form>
      </div>
    );
  }
}

NewCardForm.propTypes = {
  addQuoteCallback: PropTypes.func.isRequired,
};

export default NewCardForm;