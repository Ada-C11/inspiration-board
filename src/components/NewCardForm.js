import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props);


  }

  addCard = (event) => {
    event.preventDefault();
    const card = this.state;
    this.props.addCardCallback(card)


  }

  render() {
    return (
      <section>
        
      </section>
    )
  }


};

export default NewCardForm;
