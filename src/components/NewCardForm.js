import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"];

class NewCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      emoji: EMOJI_LIST[0],
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
    const fields = this.state;
    const eventName = event.target.name;
    const eventValue = event.target.value;

    if(eventName === 'emoji') {
      fields[eventName] = emoji.getName(eventValue);
    } else {
      fields[eventName] = eventValue;
    }
    this.setState(fields);
  }

  onSubmitButtonClick = (event) => {
    event.preventDefault();
    this.props.updateCardListCallback(this.state);
    this.setState({
      text: '',
      emoji: '',
    })
  }

  render() {
    return (
      <div className="new-card-form">
        <h3 className="new-card-form__header">Post a message</h3>
        <form className="new-card-form__form" onSubmit={this.onSubmitButtonClick}>
          <label className="new-card-form__form-label">Message</label>
          <textarea 
            className="new-card-form__form-textarea"
            onChange={this.onChangeHandler}
            name="text" 
            value={this.state.text}>
          </textarea>
          <label className="new-card-form__form-label">Emojis</label>
          <select 
            className="new-card-form__form-select" 
            name="emoji" 
            onChange={this.onChangeHandler}
            value={this.state.emoji === '' ? '' : emoji.getUnicode(this.state.emoji)}>
            {this.displayEmojiList()}
          </select>
          <input type="submit" value="Post" className="new-card-form__form-button" />
        </form>
      </div>    
    );
  }
}

NewCardForm.propTypes = {
  updateCardListCallback: PropTypes.func.isRequired,
};

export default NewCardForm;