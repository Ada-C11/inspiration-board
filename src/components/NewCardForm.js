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
      emoji: '',
    };
  }

  createForm = () => {
    return (
      <form className="new-card-form__form" onSubmit={this.handleSubmit}>
        <textarea
          className="new-card-form__form-textarea"
          name="text"
          onChange={this.handleInput}
          value={this.state.text}
        />
        <select
          className="new-card-form__form-select"
          name="emoji"
          onChange={this.handleInput}
          value={this.state.emoji}
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

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.postCardCallback(this.state);
    this.setState({
      text: '',
      emoji: '',
    });
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
        <h3 className="new-card-form__header">Leave a Note, Take a Note</h3>
        <div className="new-card-form" />
        {this.createForm()}
      </div>
    );
  }
}

export default NewCardForm;
