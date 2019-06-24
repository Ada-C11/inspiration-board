import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addCard: this.props.addCardCallback,
      cardContents: {
        text: "",
        emoji: ""
      }
    };

  };

  submitHandler = (event) => {
    event.preventDefault();

    const cardContents = this.state.cardContents;

    this.state.addCard(cardContents);

    this.setState({cardContents: {
      text: "",
      emoji: ""
    }})
  };

  onInputChange = (event) => {
    const updatedState = this.state.cardContents;

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState({cardContents: updatedState});
  }

  // onInputChange() and submitHandler comes from the Ada Developers' Academy instructors
  // https://github.com/Ada-C11/ada-pets-react/blob/sockets-axios/src/components/NewPetForm.js

  render () {
    const emojiOptions = EMOJI_LIST.map((icon, i) => {
      if (icon === "") {
        return <option value={icon} key={i}></option>
        } else {
        return <option value={icon} key={i}>{emoji.getUnicode(`${icon}`)}</option>
        };
    })

    return (
      <section className="new-card-form">
        <h3 className="new-card-form__header">
          Add a Card
        </h3>
        <form className="new-card-form__form" onSubmit={this.submitHandler}>
          <label className="new-card-form__form-label">
          Text (optional)
          </label>
          <textarea name="text" value={this.state.cardContents.text} className="new-card-form__form-textarea" onChange={this.onInputChange}/>
          <label className="new-card-form__form-label">
          Emoji (optional)
          </label>
          <select name="emoji" className="new-card-form__form-select" value={this.state.cardContents.emoji} onChange={this.onInputChange} >
            {emojiOptions}
          </select>  
          <input type="submit" value="Add Card to Board" className="new-card-form__form-button" />
        </form>
      </section>
    )
  }

};

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func,
};

export default NewCardForm;
