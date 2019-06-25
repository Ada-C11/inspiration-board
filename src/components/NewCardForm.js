import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import axios from 'axios';
import './NewCardForm.css';
import { createDecipher } from 'crypto';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.cleared = {
      text: "",
      emoji: "",
    };

    this.state = {...this.cleared}
  }

  addCard = (event) => {

    event.preventDefault();
    const card = this.state;

    axios.post('https://inspiration-board.herokuapp.com/boards/jessica/cards', {text: card.text, emoji: card.emoji})
    .then((response) => {

      console.log(card)
      this.props.addCardCallback(card);

      this.setState({...this.cleared});
    })
    .catch((error) => {
      console.log("In .catch!");
      const card = this.state;

      console.log(card)

      this.setState({
        errorMessage: error.message
      })
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
    return (
      <form  className="new-card-form" onSubmit={this.addCard}>
        <h3>Add a Card</h3>
        <label>
          Text: 
          <input 
            name="text" 
            type="text"
            value={this.state.text}
            onChange={this.onInputChange}></input>
        </label>
        <label>
          Emoji:
          <select 
            name="emoji"  
            value={this.state.emoji}
            onChange={this.onInputChange}>
              <option value="">Please Select an Emoji</option>
              <option value="heart_eyes">Heart Eyes</option>
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
              <option value="beer">Beer</option>
              <option value="clap">Clap</option>
              <option value="sparkling_heart">Sparkling Heart</option>
              <option value="heart_eyes_cat">Heart Eyes Cat</option>
          </select>
        </label>
        <input className="btn btn-success new-card-form--submit" type="submit" name="submit" value="Add a Card" />
      </form>
    )
  }
}

NewCardForm.propTypes = {

};

export default NewCardForm;