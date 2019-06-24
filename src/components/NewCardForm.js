import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.empty = {
      id: '',
      text: '',
      emoji: '',
    };

    this.state = {...this.empty}
  }

  addCard = (event) => {
    event.preventDefault();

    const card = this.state;
    this.props.addCardCallback(card)

    this.setState({...this.empty})
  }

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  displayEmojiList = EMOJI_LIST.map((emoticon, i) => {
    return <option key={i} value={ emoticon }>{ emoji.getUnicode(emoticon) }</option>
  })

  render(){
    return (
      <form  className="new-card-form" onSubmit={ this.addCard }>
        <h3>Your Motivation Here:</h3>
        <label>
          Text: 
          <input 
            name="text" 
            type="text"
            value={ this.state.text }
            onChange={ this.onInputChange }></input>
        </label>
        <label>
          Emoji:
          <select 
            name="emoji"  
            value={ this.state.emoji }
            onChange={ this.onInputChange }>
              { this.displayEmojiList }
          </select>
        </label>
        <input className="btn btn-success new-card-form--submit" type="submit" name="submit" value="Add Your Card" />
      </form>
    )
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
