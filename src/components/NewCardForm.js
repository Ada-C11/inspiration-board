import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
    constructor(props) {
        super(props)
    
    this.state = {
        text: "",
        emoji: "",
        }
    }
 
    generateSelectList = () => {
        let count = 0
        return EMOJI_LIST.map((smiley) => {
            return (
                <option key={count+=1} value={smiley}>{emoji.getUnicode(smiley)}</option>
            )
        })
        
    }

    onChange = (event) => {
        const updatedState = {};
        const field = event.target.name;
        const value  = event.target.value;
        updatedState[field] = value;
        this.setState(updatedState);    
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        const newCard = {
            text: this.state.text,
            emoji: this.state.emoji
        }
        this.props.addCardCallback(newCard)
    }

    render() {
        return(
            <div className="new-card-form">
                <h1 className="new-card-form__header">Add a New Card</h1>
                <form  className="new-card-form__form"
                onSubmit = {this.onFormSubmit}>
                <label className="new-card-form__form-label" htmlFor="text">Text</label>
                <textarea 
                className="new-card-form__form-textarea"
                name="text" 
                type="text" 
                onChange = {this.onChange} 
                value={this.state.text}></textarea>
                <label className="new-card-form__form-label" htmlFor="emoji">Emoji</label>
                <select className="new-card-form__form-select" value={this.state.emoji}
                name="emoji"
                onChange = {this.onChange}>
                    {this.generateSelectList()}
                </select>
                <input className="new-card-form__form-button" type="submit" value="Add "/>

                </form>
            </div>
        )
    }
}

NewCardForm.propTypes = {
    addCardCallback: PropTypes.func.isRequired,
  };

export default NewCardForm;

