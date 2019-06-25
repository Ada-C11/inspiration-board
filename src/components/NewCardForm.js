import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"];

class NewCardForm extends Component {

    renderEmojiList(emojis) {
        return (
            emojis.map((elem) => (
                <option key={elem} value={elem}>{emoji.getUnicode(elem)}</option>
            ))
        )
    }

    render() {
        return (
            <div>
                <h1>Make a new card!</h1>
                <form onSubmit={this.props.handleClick}>
                    <div>
                        <label>Add an inspirational quote: </label>
                        <input type="text" name="text" id="text" value={this.props.text} onChange={this.props.handleChange} required></input>
                    </div>
                    <div>
                        <label>
                            Choose an emoji:
                            <select name="emoji" value={this.props.emoji} onChange={this.props.handleChange} required>
                                {this.renderEmojiList(EMOJI_LIST)}
                            </select>
                        </label>                        
                    </div>
                    <button type="submit" value="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default NewCardForm
