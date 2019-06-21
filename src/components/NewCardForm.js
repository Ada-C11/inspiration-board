import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Components {
    constructor(props) {
        super(props)
    
    this.state = {
        text: "",
        emoji: ""
        }
    }

    render() {
        return(
            <div>
                <h1>Add a New Card</h1>
            </div>
        )
    }
}