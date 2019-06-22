import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

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
            <form
                className="new-card-form__form"
                onSubmit={this.addCard}
            >
                <h3>Add a Card</h3>
                <label>
                    Text:
                    <input
                        name="text"
                        type="text"
                        value={this.state.text}
                        onChange={this.onInputChange}></input>
                </label>
                <label>
                    Emoji:
                    <input
                        name="emoji"
                        type="text"
                        value={this.state.emoji}
                        onChange={this.onInputChange}></input>
                </label>
                <input className="btn btn-success new-card-form__form-button" type="submit" name="submit" value="Add a Card" />
            </form>
        );
    }


}
NewCardForm.propTypes = {
    // addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;