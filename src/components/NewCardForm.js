import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './NewCardForm.css';
import emoji from 'emoji-dictionary';
const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.cleared = {
      text: "",
      emoji: "",
    };

    this.state = { ...this.cleared };
  }

  addCard = (event) => {
    event.preventDefault();

    const card = this.state;

    axios.post('https://inspiration-board.herokuapp.com/boards/jessica/cards', {text: card.text, emoji: card.emoji})
    .then((response) => {
      this.props.addCardCallback(card);

      this.setState({...this.cleared});
    })
    .catch((error) => {
      this.setState({ errorMessage: error.message });
    })
  }

  onInputChange = (event) => {
    const updatedState = {};
  
    const field = event.target.name;
    const value = event.target.value;
  
    updatedState[field] = value;
    this.setState(updatedState);
  }

  render() {
    const emojiOptions = EMOJI_LIST.map((thisEmoji, i) => {
      return (
        <option value={ thisEmoji } key={ i }>
          { emoji.getUnicode(thisEmoji) }
        </option>
      );
    });

    return (
      <div className="new-card-form">
        <h3 className="new-card-form__header">Add a Card</h3>
        <form className="new-card-form__form" onSubmit={ this.addCard }>
          <label className="new-card-form__form-label">Text:</label>
          <input 
            className="new-card-form__form-textarea"
            name="text" 
            type="text"
            value={ this.state.text }
            onChange={ this.onInputChange }></input>
          <label className="new-card-form__form-label">Emoji:</label>
          <select 
            className="new-card-form__form-select"
            name="emoji"  
            value={ this.state.emoji }
            onChange={ this.onInputChange }>
              { emojiOptions }
          </select>
          <input
            className="new-card-form__form-button"
            type="submit"
            name="submit"
            value="Add a Card" />
        </form>
      </div>
    );
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;