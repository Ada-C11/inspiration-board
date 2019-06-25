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
  }

   resetState = () => {
    this.setState({
      text: '',
      emoji: '',

     });
  }

   onFormChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

     const updatedState = {};
    updatedState[field] = value;
    this.setState(updatedState);
  }

   onSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    const {text, emoji} = this.state;

     if (text === '') return;

     console.log(event);
    this.props.addCardCallback(this.state);
    this.resetState();
  }

   render() {
    return (
      <form onSubmit={this.onSubmit} name="new-card-form" id="new-card-form" className="new-card-form">
        <div>
          <label className="new-card-form__form-label" htmlFor="text">Text</label>
          <input name="text" onChange={this.onFormChange} value={this.state.text} />
        </div>
        <div>
          <label className="new-card-form__form-label " htmlFor="emoji">Emoji</label>
          <input name="emoji"  onChange={this.onFormChange} value={this.state.emoji} />
        </div>

         <input className="new-card-form__form-button " type="submit" name="submit" value="Add a Card" />
      </form>
    );
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;