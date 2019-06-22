import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor() {
    super();
    this.state = {
        text: null,
        emoji: null,
    };
  }

  render() {
    return (
      <form>
        <h3>Add an inspirational quote!</h3>
          <label>
            Text:
            <input
              name='text'
              type='text'
              value={this.state.text}
              // onChange
            ></input>
          </label>
          <label>
            Emoji:
            <select 
              name="emoji"
              value={this.state.species}
              // onChange
              >
                { EMOJI_LIST.map(emoji => <option value={emoji}>{emoji}</option>) }
            </select>
          </label>
      </form>
    );
  }
}