import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      emoi: "",
    }
  }

  onCardChange = (event) => {
    const updateCardState = {};

    const field = event.target.name;
    const value = event.target.value;

    updateCardState[field] = value;
    this.setState(updateCardState);
  }

  addCardSubmit = (event) => {
    event.preventDefault();
    const addCard = {
      text: this.state.text, 
      emoji: this.state.emoji,
    }
    this.props.addCardCallback(addCard)

    this.clearForm()
  }

 clearForm = () => {
   this.setState({
     text: "",
     emoji: "",
   })
 }

  render() {
    return (
      <section>
        <div className="new-card-form">
          <div className="new-card-form__header">
            What Inspires You?
          </div>
          <form className="new-card-form__form" onSubmit={this.addCardSubmit}>

            <div>
              <textarea name="text" value={this.state.text}
              type="text"
              className="new-card-form__form-textarea"
              onChange={this.onCardChange}  
              />
            </div>

            <div>
              <input type="submit" value="Submit Inspiration!" 
              className="new-card-form__form-button" />
            </div>
          </form>
        </div>
        
      </section>
    )
  }
};

export default NewCardForm;
