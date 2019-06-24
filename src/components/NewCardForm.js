import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          text: '',
          emoji: '',
        };
    }

    createEmojis = () => {
        const image = EMOJI_LIST.map(emo => 
            <option>{emoji.getUnicode(emo)}</option>
        );
        return image;
    }

    onChangeHandler = (event) => {
        const field = {}
        field[event.target.name] = event.target.value;
    
        this.setState(field);
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.newCardCallback({
            text: this.state.text,
            emoji: this.state.emoji,
        });
        this.setState({
            text: '',
            emoji: '',
        });
    }

    render() {

        return (
            <div className="new-card-form">
                <h2 className="new-card-form__header">New card form</h2>
                <form className="new-card-form__form" onSubmit={this.handleSubmit}>
                    <div>
                        <label for="text" nameClass="new-card-form__form-label">Card text:</label>
                        <input
                            name="text"
                            onChange={this.onChangeHandler}
                            value={this.state.text}
                            className="new-card-form__form-textarea"
                        />
                    </div>
                    <div>
                    <label for="emoji" nameClass="new-card-form__form-label">
                        Emoji:
                        <select name="emoji" value={this.state.emoji} onChange={this.onChangeHandler} className="new-card-form__form-select">
                            {this.createEmojis()}
                        </select>
                    </label>
                    </div>
                    <div>
                        <input type="submit" value="Add Card" className="new-card-form__form-button"/>
                    </div>
                </form>
            </div>
        );
    }
}

NewCardForm.propTypes = {
    newCardCallback: PropTypes.func,
};
  
export default NewCardForm;
