import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.cleared = {
      quote: "",
      Emoji: "",
    };

    this.state = { ...this.cleared }
  }

  addCard = (event) => {
    event.preventDefault();

    const card = this.state;

    this.props.addNewCard(card)

    this.setState({ ...this.cleared });
  }

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  render() {
    const emojiDisplay = EMOJI_LIST.map((emoji) => {
      return (<option value={emoji}>{emoji}</option>);
    })

    return (
      <section><form 
        className="new-card-form"
        onSubmit={this.addCard}
      >
        <h3 className="new-card-form__header">Add a Card</h3>
        <label>
          Quote:
          <input
            name="quote"
            type="text"
            value={this.state.quote}
            onChange={this.onInputChange}></input>
        </label>
        <label>
          Emoji: 
          <select
            name="Emoji"
            value={this.state.Emoji}
            onChange={this.onInputChange}>
            <option>Please Select an Emoji</option>
            {emojiDisplay}
          </select>
        </label>
        <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      </form></section>
    );
  }
}

NewCardForm.propTypes = {
  
};

export default NewCardForm;