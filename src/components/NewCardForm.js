import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji, { getUnicode } from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: '',
            emoji: '',

        }
    }

    render() {

        const { text } = this.state;

        const emojiList = EMOJI_LIST.map((emoji, i) => {
            return (
                    <option key={i} value={emoji}>
                    {getUnicode(emoji)}
                    </option>

            )

        })

        return (

            <div className='new-card-form'>
                <h3 className='new-card-form__header'>Add a New Message to the Board</h3>

                <form className='new-card-form__form'>
                    <div>
                        <label className='new-card-form__form-label' for='text'>Message: </label>
                        <input
                            type='text'
                            name='text'
                            size='50'
                            value={text}
                            className=''
                        />
                    </div>

                    <div>
                    <label for='emoji'>Add an Emoji</label>
                    <select name='emoji'>
                        {emojiList}

                    </select>
                    </div>

                    <div>
                        <input type='submit' value='Add Message' className="new-card-form__form-button" />

                    </div>





                </form>

            </div>
        )


    }


}
export default NewCardForm;