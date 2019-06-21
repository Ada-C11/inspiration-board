import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      emoji: '',
    }
  }

  displayEmojiList = () => {
    const emojis = EMOJI_LIST.map((emote, i) => {
      return(
        <option key={i}>
          {emoji.getUnicode(emote)}
        </option>
      )
    })
    return emojis;
  }

  onChangeHandler = (event) => {
    const fields = {};
    fields[event.target.name] = event.target.value;
    this.setState(fields);
  }

  onSubmitButtonClick = (event) => {
    event.preventDefault();
    this.props.updateCardListCallback(this.state);
    this.setState({
      message: '',
      emoji: '',
    })
  }


  render() {
    return (
      <div className="new-card-form">
        <h3 className="new-card-form__header">Post a message</h3>
        <form className="new-card-form__form" onSubmit={this.onSubmitButtonClick}>
          <div className="">
            <label className="new-card-form__form-label">Message</label>
            <textarea 
              className="new-card-form__form-textarea"
              onChange={this.onChangeHandler}
              name="message" 
              value={this.state.message}>
            </textarea>
          </div>
          <div>
            <label className="new-card-form__form-label">Emojis</label>
            <select 
              className="new-card-form__form-select" 
              name="emoji" 
              onChange={this.onChangeHandler}
              value={this.state.emoji}>
              {this.displayEmojiList()}
            </select>
          </div>
          <div>
            <input type="submit" value="Post" className="new-card-form__form-button" />
          </div>
        </form>
      </div>    
    );
  }
}


export default NewCardForm;