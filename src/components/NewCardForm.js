import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.cleared = {
      text: "",
      emoji: ""
    };
    
    this.state = {...this.cleared}
  }
  
  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    const card = this.state;
    
    this.props.addCard(card);
    this.setState({...this.cleared});
  }

  render() {
    const option = EMOJI_LIST.map((emoji) => {
      return <option value={emoji}>{emoji}</option>
    })
    return(
      <div className="new-card-form">
        <h3 className="new-card-form__header">Add a card</h3>
        <form className="new-card-form__form" onSubmit={this.onFormSubmit}>
          <label className="new-card-form__form-label">
            Emoji:
          </label>
          <select 
            name="emoji" 
            value={this.state.emoji} 
            className="new-card-form__form-select"
            onChange={this.onInputChange}> 
            {option}
          </select>
          
          <label className="new-card-form__form-label">
            Text:
          </label>
          <textarea 
            name="text"   
            value={this.state.text} 
            className="new-card-form__form-textarea" 
            onChange={this.onInputChange}
          />
          <input type="submit" value="Submit Card" className="new-card-form__form-button" />
        </form>
      </div>
    )
  }
}

NewCardForm.propTypes = {
  addCard: PropTypes.func.isRequired,
};

export default NewCardForm;