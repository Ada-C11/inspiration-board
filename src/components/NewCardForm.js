import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]


class NewCardForm extends Component {
  constructor(props) {
    super(props)
    this.cleared = {
      text: '', 
      emoji: '',
    };

    this.state = { ...this.cleared }
  }

  addNewCard = (e) => {
    e.preventDefault();
    this.props.addNewCardCallback(this.state)

    this.setState( {...this.cleared})
  }

  onInputChange = (e) => {
    console.log(e.target.name)
    const updatedState = {};
    const field = e.target.name;
    const value = e.target.value;
    
    updatedState[field] = value;
    this.setState(updatedState);
  }

  render() {
    const emojiOptions = EMOJI_LIST.map( (emo, i) => { 
    return ( <option key={i} value={emo}>{emoji.getUnicode(emo)}</option>)})

    return(
      <form
        className="new-card-form__form"
        onSubmit={this.addNewCard}
      >
      <section>
        <h3 className="new-card-form__header"> Add a new card</h3>
          <div>
            <textarea className="new-card-form__form-textarea"
              name="text"
              value={this.state.text}
              onChange={this.onInputChange}
            />
          </div>
        <label className="new-card-form__form-label">
          Emoji:
          <select className="new-card-form__form-select"
            name="emoji"
            value={this.state.emoji}
            onChange={this.onInputChange}>
            {emojiOptions}
          </select>
        </label>
        <div>
          <button  className="new-card-form__form-button">
            submit
          </button>
        </div>
      </section>
      </form>
    )
  }
}

NewCardForm.propTypes = {
  addNewCardCallback: PropTypes.func.isRequired,
}

export default NewCardForm;