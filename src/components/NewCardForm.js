import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]


class NewCardForm extends Component {
  constructor(props) {
    super(props)
    this.cleared = {
      text: '', 
      emoji: '',
    };

    this.state = { ...this.cleared }
  }

  render() {
    return(
      <div>
        Testing out my new form.
      </div>
    )
  }
}

export default NewCardForm;