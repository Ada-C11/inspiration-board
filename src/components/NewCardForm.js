import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
    constructor(){
        super();
        this.state = {
            text: '',
            emoji: ''
        }
    }

    onInputChange = (event) => {
        const updatedState = {}

        const field = event.target.name;
        const value = event.target.value;

        updatedState[field] = value;
        this.setState(updatedState);
        // console.log('Updated text: ', this.state.text)
        // console.log('Updated emoji: ', this.state.emoji)
    }

    addCard = (event) => {
        event.preventDefault();

        const card = this.state;
        this.props.addCardCallback(card)

        this.setState ({
            text: '',
            emoji: ''
        })
    }

    render() {
        return(
            <form  className="new-card-form" onSubmit={this.addCard}>
            <h3>Add a Inspirational Message!</h3>
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
                  <option value="">Optional Emojis</option>
                  <option value={EMOJI_LIST[0]}>None</option>
                  <option value={EMOJI_LIST[1]}>Heart Eyes</option>
                  <option value={EMOJI_LIST[2]}>Beer</option>
                  <option value={EMOJI_LIST[3]}>Clap</option>
                  <option value={EMOJI_LIST[4]}>Sparkling Heart</option>
                  <option value={EMOJI_LIST[5]}>Cat Eyes Heart</option>
                  <option value={EMOJI_LIST[6]}>Dog</option>
              </select>
            </label>
            <input 
            className="btn btn-success new-card-form--submit" 
            type="submit" 
            name="submit" 
            value="Add a Card" />
          </form>
        )
    }
}

export default NewCardForm;