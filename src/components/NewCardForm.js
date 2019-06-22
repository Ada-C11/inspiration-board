import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = [
  '',
  'heart_eyes',
  'beer',
  'clap',
  'sparkling_heart',
  'heart_eyes_cat',
  'dog',
];

class NewCardForm extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      emoji: null,
    };
  }

  createForm = () => {
    return (
      <form className="new-card-form__form">
        <textarea
          className="new-card-form__form-textarea"
          name="text"
          onChange={this.handleInput}
        />
        <select
          className="new-card-form__form-select"
          name="emoji"
          onChange={this.handleInput}
        >
          {this.selectDropDown()}
        </select>
        <input className="new-card-form__form-button" type="submit" />
      </form>
    );
  };

  handleInput = event => {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };

  selectDropDown = () => {
    return EMOJI_LIST.map((emo, i) => {
      return (
        <option key={i} value={emo}>
          {emoji.getUnicode(emo)}
        </option>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="new-card-form">
          <label className="new-card-form__header">Leave a Note:</label>
        </div>
        {this.createForm()}
      </div>
    );
  }
}

export default NewCardForm;
