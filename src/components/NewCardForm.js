import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", emoji.getUnicode("heart_eyes"), emoji.getUnicode("beer"), emoji.getUnicode("clap"), emoji.getUnicode("sparkling_heart"), emoji.getUnicode("heart_eyes_cat"), emoji.getUnicode("dog")]

class NewCardForm extends Component {
    constructor(props) {
        super(props);

        this.cleared = {
            text: "",
            emoji: "",
        };

        this.state = { ...this.cleared }
    }

    addCard = (event) => {
        event.preventDefault();

        const card = this.state;
        console.log(this.props)

        this.props.addCardCallback(card)

        this.setState({ ...this.cleared });
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
            <div className="new-card-form">
            <form
                className="new-card-form__form"
                onSubmit={this.addCard}
            >
                <h3 className="new-card-form__header">Add a Card</h3>
                <label className="new-card-form__form-label">
                    Text:
                    <input
                        className="new-card-form__form-textarea"
                        name="text"
                        type="text"
                        value={this.state.text}
                        onChange={this.onInputChange}></input>
                </label>
                <label className="new-card-form__form-label">
                    Emoji:
                    <select
                        className="new-card-form__form-select"
                        name="emoji"
                        value={this.state.emoji}
                        onChange={this.onInputChange}>
                        <option value={EMOJI_LIST[0]}>{EMOJI_LIST[0]}</option>
                        <option value={EMOJI_LIST[1]}>{EMOJI_LIST[1]}</option>
                        <option value={EMOJI_LIST[2]}>{EMOJI_LIST[2]}</option>
                        <option value={EMOJI_LIST[3]}>{EMOJI_LIST[3]}</option>
                        <option value={EMOJI_LIST[4]}>{EMOJI_LIST[4]}</option>
                        <option value={EMOJI_LIST[5]}>{EMOJI_LIST[5]}</option>
                        <option value={EMOJI_LIST[6]}>{EMOJI_LIST[6]}</option>
                        </select>
                        
                </label>
                <input className="btn btn-success new-card-form__form-button" type="submit" name="submit" value="Add a Card" />
            </form>
            </div>
        );
    }


}
NewCardForm.propTypes = {
    addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;