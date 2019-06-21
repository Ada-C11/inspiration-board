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
      emoji: '',
    };
  }

  onChangeHandler = (event) => {
    const newState = {}
    
    newState[event.target.name] = event.target.value;

    this.setState(newState);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // const card = {
    //   text: this.state.text,
    //   emoji: this.state.emoji,
    // }

    const card = this.state;

    this.props.addCardCallback(card);

    this.setState({
      text: "",
      emoji: "",
    });
  }


  render(){
    return(
      <form className="new-card-form" onSubmit={this.handleSubmit}> 
        <h3> Add a Card</h3>
        <div>
          <label htmlFor="text"> Text: </label>
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.onChangeHandler} 
          /> 
  
          <label htmlFor="emoji"></label>
          <select
            type="text"
            name="emoji"
            value={this.state.emoji}
            onChange={this.onChangeHandler}>
              <option value="">Add emojis to your message!</option>
              <option value={EMOJI_LIST[0]}>None</option>
              <option value={EMOJI_LIST[1]}>Heart Eyes</option>
              <option value={EMOJI_LIST[2]}>Beer</option>
              <option value={EMOJI_LIST[3]}>Clap</option>
              <option value={EMOJI_LIST[4]}>Sparkling Heart</option>
              <option value={EMOJI_LIST[5]}>Heart Eyes Cat</option>
              <option value={EMOJI_LIST[6]}>Dog</option>
          </select>
          
        </div>

        <div className=".new-card-form__form-button">
          <input 
            className="btn btn-success new-card-form--submit" 
            type="submit" 
            name="submit" 
            value="Add a Card" 
          />
        </div>
      </form>
    );
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired
};
export default NewCardForm;