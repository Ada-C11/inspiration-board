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
        return EMOJI_LIST.map((smiley) => {
            return (
                <option value={smiley}>{emoji.getUnicode(smiley)}</option>
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
            <div>
                <h1>Add a New Card</h1>
                <form  className="new-card-form"
      onSubmit = {this.onFormSubmit}>
                <label htmlFor="text">Text</label>
                <input name="text" 
                type="text" 
                onChange = {this.onChange} 
                value={this.state.text}/>
                <label htmlFor="emoji">Emoji</label>
                <select value={this.state.emoji}
                name="emoji"
                onChange = {this.onChange}>
                    {this.generateSelectList()}
                </select>
                <input type="submit" value="Add Card"/>

                </form>
            </div>
        )
    }
}

export default NewCardForm;