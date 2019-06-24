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
            emoji: ""
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
        updatedState[event.target.name] = event.target.value;
        this.setState(updatedState);
      }

    generateEmoji = (emojis) => {
        return emojis.map((emojiText, i) => {
            return <option value={emojiText} key={i}>{emoji.getUnicode(emojiText)}</option>
        })
    }
    
    render() {
        return (
            <div className='new-card-form'>
                <form onSubmit={this.addCard} className='new-card-form__form'>
                    <h3 className='new-card-form__header'>Add a Card</h3>
                    <label className='new-card-form__form-label'>Text:</label>
                    <textarea
                        name="text"
                        value={this.state.text}
                        className='new-card-form__form-textarea'
                        onChange={this.onInputChange}>  
                    </textarea>
                    <label className='new-card-form__form-label'>Emoji:</label>
                    <select
                        name="emoji"
                        value={this.state.emoji}
                        className='new-card-form__form-select'
                        onChange={this.onInputChange}>  
                            {this.generateEmoji(EMOJI_LIST)}
                    </select>
                    <input className="new-card-form__form-button" type="submit" name="submit" value="Add a Card" />
                </form>
            </div>
        )
    }

}

NewCardForm.propTypes = {
    addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;