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

  generateEmojiListOptions = () => {
    return EMOJI_LIST.map((emojiItem, index) => {
      return <option key={index} value={emojiItem}> {emoji.getUnicode(emojiItem)} </option>
    })
  }

  onInputChange = (event) => {
    const field = {}
    field[event.target.name] = event.target.value;
    this.setState(field);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addCardCallback({
        text: this.state.text,
        emoji: this.state.emoji
    });
    this.setState({
      text: '',
      emoji: ''
    });


  }

  render() {
    return (
      <section className='new-card-form'>
        <h3 className='new-card-form__header'>Add a New Card to the Inspiration Board</h3>
        <form  className="new-card-form__form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="text" className='new-card-form__form-label'>Inspiration:</label>
            <input
              type='textarea'
              name="text"
              value={this.state.text}
              onChange={this.onInputChange}
              className='new-card-form__form-textarea'
            />
          </div>

          <div>
            <label htmlFor="emoji" className="new-card-form__form-label">Emoji:</label>
            <select
              name="emoji"
              className="new-card-form__form-select"
              value={this.state.emoji}
              onChange={this.onInputChange}
              >
              {this.generateEmojiListOptions()}
            </select>
          </div>

          <input className="new-card-form__form-button" type="submit" name="submit" value="add card" />

        </form>
      </section>
    );
  }


}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
