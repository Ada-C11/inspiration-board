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
    emoji: null,
    };
  }

  onChangeHandler = (event) => {
    const field = {}
    field[event.target.name] = event.target.value;

    this.setState(field);
  }
    
  addCardCallback = (event) => {
    event.preventDefault();

    this.props.addCardCallback({
        text: this.state.text,
        emoji: this.state.emoji,
    });

    this.setState({
        text: '',
        emoji: null,
    });
  }

  emojiOptions = () => {
    return EMOJI_LIST.map((cardEmoji, i) => {
        return <option key={ i } value={ cardEmoji }>{ emoji.getUnicode(cardEmoji) }</option>
    });
  }

  render() {
    return (
      <form className="new-card-form" onSubmit={this.addCardCallback}>
        <div className="new-card-form__form">
            <h3 className="new-card-form__header">Add Card</h3>
        </div>
        <div>
            <textarea 
              className="new-card-form__form-textarea"
              name="text" 
              onChange={this.onChangeHandler} 
              value={this.state.text}/>
        </div>
        <div>
            <label 
              className="new-card-form__form-label" 
              htmlFor="emoji">Emoji</label>
            <select className="new-card-form__form-select"
              name="emoji"
              onChange={this.onChangeHandler}
              value={this.state.emoji}>
                  {this.emojiOptions()}
            </select>
        </div>
        <input className="new-card-form__form-button" type="submit" name="submit" value="Add Card" />
    </form>
    )};
}

NewCardForm.propTypes = {
    addCardCallback: PropTypes.func.isRequired,
  };

export default NewCardForm;
