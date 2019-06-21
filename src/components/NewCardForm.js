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

    }
  }

  onChangeHandler = (event) => {
    const field = {}
    field[event.target.name] = event.target.value

    this.setState(field)
  }

  onClickSubmit = (event) => {
    event.preventDefault();
    console.log('yes')

    this.props.onSubmitNewCardCallback(this.state)
    
    const emptyState = this.state

    Object.keys(emptyState).forEach((key) => {
      emptyState[key] = '';
    })

    this.setState(emptyState);
  }


  render() {

    const emojiSelections = EMOJI_LIST.map((emojiName, i) => {
        return (
          <option key={i} value={emojiName}>{emoji.getUnicode(emojiName)}</option>
        )
    });

    return(
      <div className='new-card-form'>
        <h3 className='new-card-form__header'>Add A Card</h3>

        <form 
          onSubmit={this.onClickSubmit} 
          className="new-card-form__form" >

          <label className='new-card-form__form-label' htmlFor="text">Text</label>
          <input
            className='new-card-form__form-textarea'
            name='text'
            placeholder="You're amazing!"
            type="text"
            onChange={this.onChangeHandler}
            value={this.state.text}
          />

          <label className='new-card-form__form-label' htmlFor="emoji">Emoji</label>
          <select 
            className='new-card-form__form-select'
            name='emoji'
            onChange={this.onChangeHandler}
            value={this.state.emoji}
          >
            {emojiSelections}
          </select>

          <div>
            <input className='new-card-form__form-button' type="submit" value="Submit Card" />
          </div>
        </form>
      </div>
    )
  }
}

export default NewCardForm;
