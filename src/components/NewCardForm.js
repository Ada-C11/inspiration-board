import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const emojiList = EMOJI_LIST.map((singleEmoji, i) => {
    return (
        <option value={`${singleEmoji}`}>{emoji.getUnicode(`${singleEmoji}`)}</option>
    )
});

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.cleared = {
      text: "",
      emoji: "",
    };

    this.state = {...this.cleared}
  }
  
  addCard = (event) => {
    event.preventDefault();

    const card = this.state;

    this.props.addCardCallback(card)

    this.setState({...this.cleared});
  }

  onInputChange = (event) => {
    const updatedState = {};
  
    const field = event.target.name;
    const value = event.target.value;
  
    updatedState[field] = value;
    this.setState(updatedState);
  }

  render() {
    return (
    <section className="new-card-form">
      <form  className="new-card-form__form" onSubmit={this.addCard}>
        <h3 className="new-card-form__header">Add a Card</h3>
        <label className="new-card-form__form-label">
          Text: 
          <input className="new-card-form__form-textarea"
            name="text" 
            type="text"
            value={this.state.text}
            onChange={this.onInputChange}></input>
        </label>
        <label className="new-card-form__form-label">
          Emoji:
          <select className="new-card-form__form-select"
            name="cardEmoji"  
            value={this.state.cardEmoji}
            onChange={this.onInputChange}>
              <option value="">Select an Emoji</option>
              {emojiList}
          </select>
        </label>
        <input className="new-card-form__form-button" type="submit" name="submit" value="Add a Card" />
      </form>
      </section>
    );
  }


}

NewCardForm.propTypes = {
//   addPetCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
