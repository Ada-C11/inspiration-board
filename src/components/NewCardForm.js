import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji, { getUnicode } from 'emoji-dictionary';
import './NewCardForm.css';
import axios from 'axios';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
    constructor(props) {
        super(props);
        this.startState = {
            text: '',
            emoji: '',
            message: ''
        };
        this.state = this.startState
    }

    emojiList = () => {
        const list = EMOJI_LIST.map((emoji) => {
            const cardEmoji = emoji ? getUnicode(emoji) : 'Thank u, next. No emoji';
            return (<option key={emoji} value={emoji}>{cardEmoji}</option>);
        });
        return list;
    }

    onInputChange = (event) => {
        const updatedState = {};
        const field = event.target.name;
        const value = event.target.value;
        updatedState[field] = value;
        this.setState(updatedState);
    }

    postCard = (event) => {
        const url = this.props.cardsEndpoint;
        axios.post(url, { text: this.state.text, emoji: this.state.emoji })
            .then((response) => {
                const newCard = response.data.card;
                this.props.addCardCallback(newCard);
                const id = newCard.id;
                console.log(`Card ${id} successfully created`)
                this.setState({message: `Card ${id} successfully created`})
            })
            .catch((error) => {
                console.log(error);
                
                this.setState({message: error.toString()})
              })

 
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.postCard();
        this.setState(this.startState)
    }

    render() {
        return (
            <div className='new-card-form'>
                <h3 className='new-card-form__header'> Add Inspiration Here </h3>
                <p className='statusMessage'> {this.state.message} </p>
                <form
                    className='new-card-form__form'
                    onSubmit={this.onFormSubmit}>
                    <label className='new-card-form__form-label'>
                        Message:
                    <textarea
                            name='text'
                            value={this.state.text}
                            onChange={this.onInputChange}
                            placeholder='message here'
                            className='new-card-form__form-textarea' />
                    </label>
                    <label>
                        Emoji:
                        <select
                            name="emoji"
                            className='new-card-form__form-select'
                            value={this.state.emoji}
                            onChange={this.onInputChange}>
                            <option value="">Add an Emoji</option>
                            {this.emojiList()}
                        </select>
                    </label>
                    <button
                        className='new-card-form__form-button'>
                        Add Note!
                    </button>

                </form>
            </div>
        )
    }
}

export default NewCardForm;