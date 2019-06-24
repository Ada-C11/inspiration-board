import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

class NewCardForm extends Component {
    constructor(props) {
        super(props);
        
        this.cleared = {
            text: "",
            emoji: ""
        };

        this.state = {...this.cleared}
        
        }

    addCard = (event) => {
        event.preventDefault();

        const card = this.state;

        this.props.addCardCallback(card)

        this.setState({...this.cleared});
    }

    onInputChange =(event) => {
        const updatedState = {};
        const field = event.target.name;
        const value = event.target.value;

        updatedState[field] = value;
        this.setState(updatedState);
    }    
    render() {
        const emoji = require("emoji-dictionary");

        const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

        const emojiOption = EMOJI_LIST.map((symbol) => {
            return (
                <option value = {symbol}> 
                {emoji.getUnicode(symbol)}
                </option>
            )
        })
        return (
            <div className="new-card-form">
                <form className="new-card-form__form" onSubmit={this.addCard}>
                    <header className="new-card-form__header">
                        <h3>Add a Card</h3>
                    </header>
                    <label className="new-card-form__form-label">
                        Text:
                        <input
                        className="new-card-form__form-textarea"
                        name="text"
                        type="text"
                        value={this.state.name}
                        onChange={this.onInputChange}
                        >
                        </input>
                    </label>
                    <label className="new-card-form__form-label">
                        Emoji:
                        <select
                        className="new-card-form__form-select"
                        name="emoji"
                        value={this.state.emoji}
                        onChange={this.onInputChange}
                        >
                        {emojiOption}
                        </select>
                    </label>
                    <input className="new-card-form__form-button" 
                    type="submit"
                    value="Add a Card"
                    />
                </form>
            </div>
        )
    }
}


export default NewCardForm;