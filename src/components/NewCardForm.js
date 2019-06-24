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


    onSubmitCardButtonClick = (event) => {
        event.preventDefault();

        const newCard = {
            text: this.state.text,
            emoji: this.state.emoji
        };

        this.setState({
            text: "",
            emoji: ""
        })

        this.props.addCardCallback(newCard);
    }

    onInputChange = (event) => {
        const updatedCard = {};

        const field = event.target.name;
        const value = event.target.value;

        console.log(event.target.name);
        console.log(event.target.value);

        updatedCard[field] = value;
        this.setState(updatedCard);
    }

    render() {

        const { text, emoji } = this.state;

        return (
            <div className="new-card-form">
                <h3 className="new-card-form__header">Submit a New Card</h3>
                <form className="new-card-form__form">

                    <div>
                        <textarea
                            name="text"
                            value={text}
                            onChange={this.onInputChange}
                            className="new-card-form__form-textarea"
                            placeholder="Enter Stuff Here">
                        </textarea>
                    </div>

                    <div>
                        <input
                            placeholder="emoji"
                            type="text" />
                    </div>

                    <div>
                        <input onClick={this.onSubmitCardButtonClick} className="new-card-form__form-button" type="submit" value="Submit Card" />
                    </div>

                </form>
            </div>
        )
    }
}

export default NewCardForm;

NewCardForm.propTypes = {
    addCardCallback: PropTypes.func.isRequired,
};