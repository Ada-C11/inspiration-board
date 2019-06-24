import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      emoji: ""
    }
  }

  onInputChange = (event) => {
    const updatedState = {};
  
    const field = event.target.name;
    const value = event.target.value;
  
    updatedState[field] = value;
    this.setState(updatedState);

  }

  onFormSubmit = (event) => {
    event.preventDefault();
    if(this.state.emoji === ""){
      this.state.emoji = null
      this.setState({emoji: null})
    }
    const cardContent = { 
      "text" : this.state.text,
      "emoji": this.state.emoji
      }
      
    this.props.addCardCallBack(cardContent)
  
    this.setState({
      text: '',
      emoji: '',
    });
  }

  render() {

    return (
      <div className="new-card-form">
        <h3 className="new-card-form__header">Add Card</h3>

        <form className="new-card-form__form" onSubmit={this.onFormSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">
    
            <input
              className="new-card-form__form-label" 
              placeholder="text"
              name="text"
              type="text"
              value={this.state.text} 
              onChange={this.onInputChange}/>
            <input
              className="new-card-form__form-label" 
              placeholder="emoji"
              name="emoji"
              type="text"
              value={this.state.emoji}
              onChange={this.onInputChange} />
    
          </div>

          <div className="">
            <input type="submit" value="Add" className="new-card-form__form-button"/>
          </div>
        </form>
      </div>
    );
  }
}

export default NewCardForm;
