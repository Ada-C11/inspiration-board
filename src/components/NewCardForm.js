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
  
    this.state = {...this.state}
  }
    
  addCard = (event) => {
    event.preventDefault();
  
    const card = this.state;
  
    this.props.addCardCallback(card)
  
    this.setState({...this.state});
  }
  
  onInputChange = (event) => {
    const updatedState = {};
    
    const field = event.target.name;
    const value = event.target.value;
    
    updatedState[field] = value;
    this.setState(updatedState);
  }
  
  render() {
    const emojis = EMOJI_LIST.map((emojiText, i) => {

    const emojiUnicode = emoji.getUnicode(emojiText);
      return (<option value = {emojiUnicode} key = {i}>{emojiUnicode}</option>)
    });

    return (
      <form  className="new-card-form" onSubmit={this.addCard}>
        <h3 className="new-card-form__header ">Write a Card</h3>
        <div>
          <label className="new-card-form__form">
            text: 
            <textarea 
              className="new-card-form__form-textarea"
              name="text" 
              type="text"
              value={this.state.text}
              onChange={this.onInputChange}>
            </textarea>
          </label>
        </div>
        <div>
          <label className="new-card-form__form">
            emoji: 
            <select className="new-card-form__form-select" name="emoji" value={this.state.emoji} onChange={this.onInputChange}>
              {emojis}
            </select>
          </label>
        </div>
          <input className="new-card-form__form-button" type="submit" name="submit" value="Add Card" />
      </form>
      );
    }
  
  
}
  
NewCardForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};
  
  export default NewCardForm;
  
