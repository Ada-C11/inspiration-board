import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
    constructor(props) {
        super(props);

        this.cleared = {
            text: '',
            emoji: '',
        }
        this.state = {
            ...this.cleared}
    }

    onAddCard = (event) => {
        event.preventDefault();
        console.log(`addCard`)
        

        const card = {
            text: this.state.text,
            emoji: this.state.emoji
        }
            
        this.props.onAddCardCallback(card)
        this.setState({...this.cleared})
    }

    onInputChange = (event) => {
        console.log(`updating`)
        const cardInfo = {}

        const field = event.target.name;
        const value = event.target.value;
        cardInfo[field] = value
        this.setState(cardInfo)
    }

    render(){
        console.log(emoji)
       
       


        return(
            <form className='new-card-form'>
                <h3 className='new-card-form__header'>
                    New Card
                    </h3>
                <section className='new-card-form__form'>

                    <label className='new-card-form__form-label'>
                        Text:
                        <input 
                        className='new-card-form__form-textarea'
                        name='text'
                        type='text'
                        value={this.state.text}
                        onChange={this.onInputChange}
                        >
                        </input>
                    </label>

                    <label className='new-card-form__form-label'>
                        Emoji:
                        <input 
                        className='new-card-form__form-textarea'
                        name='emoji'
                        type='text'
                        value={this.state.emoji}
                        onChange={this.onInputChange}
                        >
                        </input>
                        
                    </label>
                    
                    <input className="new-card-form__form-button" type="submit" name="submit" value="Add a Card" onClick={this.onAddCard}/>
                    
                </section>
            </form>
        )
    }
};

NewCardForm.propTypes = {
    text: PropTypes.string,
    emoji: PropTypes.string
}

export default NewCardForm;

