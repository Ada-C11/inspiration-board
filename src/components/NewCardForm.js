import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';


const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]
class NewCardForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            emoji: "",
        }
    }

    onInputChange = (event) => {
        const updatedState = {};

        const field = event.target.name;
        const value = event.target.value;

        updatedState[field] = value;
        this.setState(updatedState);
    }


    clearForm = () => {
        this.setState({
            text: "",
            emoji: "",
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        const newCard = {
            text: this.state.text,
            emoji: this.state.emoji,
        }

        this.props.addCardCallback(newCard)
        this.clearForm()
    }


    emojiOptions = (emojis) => {
        const select = emojis.map((emojiString) => {
            return (
                <option value={emojiString}>{emoji.getUnicode(emojiString)}</option>
            )
        })
        return select
    }

    render() {
        return (
            <div className="new-card-form">
                <div className="new-card-form__header">
                    Write a Inspirational Card!
                </div>
                <form className="new-card-form__form" onSubmit={this.onFormSubmit}>
                    <div>
                        <textarea name="text" value={this.state.text} type="text" onChange={this.onInputChange} className="new-card-form__form-textarea" />
                    </div>
                    <div>
                        <select className="new-card-form__form-select" onChange={this.onInputChange} name="emoji" value={this.state.emoji}  >
                            {this.emojiOptions(EMOJI_LIST)}
                        </select>
                    </div>
                    <div>
                        <input type="submit" value="Submit Card" className="new-card-form__form-button" />
                    </div>
                </form>
            </div>
        )
    }
}
export default NewCardForm;