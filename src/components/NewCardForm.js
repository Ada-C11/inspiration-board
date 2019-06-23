import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        text: null,
        emoji: null,
      };
  
    //   what the fuck is this.cleared with the states
    //   this.state = {...this.cleared} 
    }

    
    addCard = (event) => {
      event.preventDefault();
  
    //   const card = this.state;
  
    //   this.props.addCardCallback(card)
  
    //   this.setState({...this.cleared});
    this.props.addCardCallback({
        text: this.state.text,
        emoji: this.state.emoji,
    })
    // I think this is the bit thats not working
    // DON"T FORGET IT KEEPS BREAKING ON SUBMISSION EVEN THOUGH IT POSTS
    this.setState({
        text: null,
        emoji: null,
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
        const emojis = EMOJI_LIST.map((emojiIcon) => {
            return (
            <option value={ emojiIcon }>{ emoji.getUnicode(emojiIcon) }</option>
            )
        });
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
                <option value="">Please Select an emoji</option>
                { emojis }
            </select>
          </label>

          <input className="new-card-form__form-button" type="submit" name="submit" value="Add a Card" />
        </form>
      );
    }
  
  
  }
  
  NewCardForm.propTypes = {
    addCardCallback: PropTypes.func.isRequired,
  };
  
  export default NewCardForm;
  