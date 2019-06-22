import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props)

    this.cleared = {
      id: '',
      text: '',
      emoji: '',
    }

    this.state = { ...this.cleared }
  }

  addCard = (event) => {
    event.preventDefault()

    const card = this.state
    this.props.addCardCallback(card)
    this.setState({...this.cleared})
  }

  onInputChange = (event) => {
    const updatedState = {}
    const field = event.target.name
    const value = event.target.value

    updatedState[field] = value
    this.setState(updatedState)
  }

  showEmojiList = EMOJI_LIST.map((item) => {
    return <option value={ item }>{ emoji.getUnicode(item) }</option>
  })

  render() {
    return (
      <section className='new-card-form'>
        <form
      className="new-card-form__form"
      onSubmit={this.addCard}
    >
      <h3 className='new-card-form__header'>Add a Card</h3>
      <label className='new-card-form__form-label'>
        Text:
        <textarea className='new-card-form__form-textarea'
          name="text"
          value={this.state.text}
          onChange={this.onInputChange} />
      </label>
      <label className='new-card-form__form-label'>
          Emoji:
          <select className='new-card-form__form-select'
            name="emoji"  
            value={ this.state.emoji }
            onChange={ this.onInputChange }>
              { this.showEmojiList }
          </select>
        </label>
      <input className="btn btn-success new-card-form__form-button" type="submit" name="submit" value="Add a Card" />
    </form>
      </section>
    )
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
}

export default NewCardForm