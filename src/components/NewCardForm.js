import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    const emojiOptions = EMOJI_LIST.map((icon) => {
      if (icon === "") {
        return <option value={icon} ></option>
        } else {
        return <option value={icon} >{emoji.getUnicode(`${icon}`)}</option>
        };
    })

    return (
      <section className="new-card-form">
        <h3 className="new-card-form__header">
          Add a Card
        </h3>
        <form className="new-card-form__form">
          <label for="text" className="new-card-form__form-label">
          Text (optional)
          </label>
          <textarea name="text" className="new-card-form__form-textarea" />
          <label for="emoji" className="new-card-form__form-label">
          Emoji (optional)
          </label>
          <select name="emoji" className="new-card-form__form-select">
            {emojiOptions}
          </select>  
        </form>
        <button type="submit" className="new-card-form__form-button">Add Card to Board</button>
      </section>
    )
  }

};

export default NewCardForm;
