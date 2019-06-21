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
        emoji: ""
        }
    }
 
    generateSelectList = () => {
        return EMOJI_LIST.map((smiley) => {
            return (
                
                <option value={smiley}>{emoji.getUnicode(smiley)}</option>
            )
        })
        
    }

    render() {
        return(
            <div>
                <h1>Add a New Card</h1>
                <label htmlFor="name">Text</label>
                <input name="name" 
                type="text" 
                onChange = {this.onNameChange} 
                value={this.state.name}/>
                <select value="select emoji">
                    {this.generateSelectList()}
                </select>
            </div>
        )
    }
}

export default NewCardForm;