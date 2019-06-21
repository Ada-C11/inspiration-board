import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: '',
      emoji: '',
    };
  }

  render(){
    return(
      <form className="new-card-form"> 
        <h3> Add a Card</h3>
        <div>
          <label htmlFor="text"> Text: </label>
          <textarea 
            type="text"
            value={this.state.text}>
          </textarea> 
            
  
          <label htmlFor="emoji"> Emoji: </label>
          <input
            type="emoji"
            value={this.state.emoji}
          />
        </div>
        <div className=".new-card-form__form-button">
          <input className="btn btn-success new-card-form--submit" type="submit" name="submit" value="Add a Card" />
        </div>
      </form>
    );
  }
}

export default NewCardForm;