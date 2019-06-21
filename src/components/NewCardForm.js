import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji, { getUnicode } from 'emoji-dictionary';
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

    onInputChange = (event) => {
        const updatedState = {};
        const field = event.target.name;
        const value = event.target.value;
        console.log(value)
        updatedState[field] = value;
        this.setState(updatedState);
    }

    emojiList = () => {
        const list = EMOJI_LIST.map((emoji) => {
            const cardEmoji = emoji ? getUnicode(emoji) : 'no emoji';
            return ( <option value={emoji}>{cardEmoji}</option> );
        });
        return list;
    }

    render() {
        return (
            <div className='new-card-form'>
                <p> NewCardForm Here </p>
                <form className='new-card-form__form'>
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
                            className = 'new-card-form__form-select'
                            value={this.state.emoji}
                            onChange={this.onInputChange}>
                            <option value="">Add an Emoji</option>
                            {this.emojiList()}
                        </select>
                    </label>


                </form>
            </div>
        )
    }
}

export default NewCardForm;