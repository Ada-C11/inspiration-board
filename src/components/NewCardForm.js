import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

class NewCardForm extends Component {

    static propTypes = {
        addCardCallback: PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.cleared = {
            text: "",
            emoji: "",
        };
        this.state = {...this.cleared}

    }

    addCard = (event) => {
        event.preventDefault();
        const card = this.state;
        this.props.addCardCallback(card)
        this.setState({...this.cleared});
    }

    onInputChange = (event) => {
        const updatedState = {};
        const field = event.target.name;
        const value = event.target.value;
        updatedState[field] = value;
        this.setState(updatedState);
    }

    render(){
        const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]
        const emojis = EMOJI_LIST.map((emoj, i) => {
            return (<option key={i} value={emoj}>{emoji.getUnicode(emoj)}</option>)
        });
        return (
            <form className="new-card-form__form" onSubmit={this.addCard}>
                <h1 className="new-card-form__header">Add a Card</h1>
                <label className="new-card-form__form-label ">
                    Text:
                    <input className="new-card-form__form-textarea"
                        name="text"
                        type="text"
                        value={this.state.text}
                        onChange={this.onInputChange}>
                    </input>
                </label>
                <label className="new-card-form__form-label">
                    Emoji:
                    <select className="new-card-form__form-select"
                        name="emoji"
                        onChange={this.onInputChange}>
                           {emojis} 
                    </select>
                </label>
                <button className="new-card-form__form-button">Submit</button>
            </form>
        );
    }

}

export default NewCardForm;