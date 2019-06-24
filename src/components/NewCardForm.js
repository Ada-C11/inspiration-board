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
      <form
        onSubmit={this.addQuote}>
        <h3>Add an inspirational quote!</h3>
          <label>
            Text:
            <input
              name='text'
              type='text'
              value={this.state.text}
              onChange={this.onInputChange}
            ></input>
          </label>
          <label>
            Emoji:
            <select 
              name="emoji"
              value={this.state.species}
              onChange={this.onInputChange}
              >
                { EMOJI_LIST.map(emoji => <option value={emoji}>{emoji}</option>) }
            </select>
          </label>
          <input 
            className="" 
            type="submit" 
            name="submit" 
            value="Add quote" />
      </form>
    );
  }
}

export default NewCardForm;