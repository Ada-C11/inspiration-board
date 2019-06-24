import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState();
    }

    initialState = () => {
        return ({
            emoji: "",
            text: "",
        });
    }

    onInputChange = (event) => {
        const updatedState = {};
      
        const field = event.target.name;
        const value = event.target.value;
      
        updatedState[field] = value;
        this.setState(updatedState);
      }
    
      handleSubmitForm  = (event)=> {
        const {text, emoji} = this.state;
        event.preventDefault();
        this.props.submitCallback(text, emoji);
        this.setState(this.initialState());
      }

    generateOptions = () => {
        return (
            EMOJI_LIST.map((emojiText, i) =>{
                return (<option value={emojiText} key={i}>{emoji.getUnicode(emojiText)}</option>);
            })
        );
        
    } 

    render() {
        return (
            <div className="new-card-form">
                <h1 className="new-card-form__header">Add a Quote</h1>
                <form className="new-card-form__form" onSubmit={this.handleSubmitForm}>
                    <input 
                        type="text"
                        placeholder="Quote Text"
                        name="text"
                        value={this.state.text}
                        onChange={this.onInputChange}
                        ></input>
                    <select name="emoji" 
                            value={this.state.emoji}
                            selected={this.state.emoji}
                            onChange={this.onInputChange}
                            >
                        {this.generateOptions()}
                    </select> 
                    <input type="submit" value="Add Quote"></input>     
                </form> 
            </div>
           
            
        )
    }
}

NewCardForm.propTypes = {
    submitCallback: PropTypes.func.isRequired,
}

export default NewCardForm;