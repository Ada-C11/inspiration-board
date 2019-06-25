import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      emoji: '',
    };

    this.emojiOptions = [];
    
    EMOJI_LIST.forEach((name) => {
      this.emojiOptions.push(
        <option value={name}>{emoji.getUnicode(name)}</option>
      );
    });
  }

  onTextChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  }

  onEmojiChange = (event) => {
    this.setState({
      emoji: event.target.value,
    });
  }
 
  onFormSubmit = (event) => {
    event.preventDefault();

    const newCardFields = {
      text: this.state.text,
      emoji: this.state.emoji,
    }

    this.props.newCardCallback(newCardFields);
  }

  render() {
    return (
      <div className="new-card-form">
        <div className="new-card-form__header">
          Add a Card
        </div>
        <form className="new-card-form__form" onSubmit={this.onFormSubmit}>
          <div>
            <label htmlFor="text">Text:</label>
            <textarea
              name="text"
              onChange={this.onTextChange}
              value={this.state.text}
            />
          </div>
          <div>
            <label htmlFor="emoji">Emoji:</label>
            <select
              name="emoji" 
              onChange={this.onEmojiChange}
              value={this.state.emoji}
              type="select"
            >
              {this.emojiOptions}
            </select>
          </div>
          <button type="submit" name="submit">Add Card</button>
        </form>
      </div>
    );
  }
}

export default NewCardForm;