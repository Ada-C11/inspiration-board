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
    };
  
    onChangeHandler = (event) => {
      const field = {}
      field[event.target.name] = event.target.value;
  
      this.setState(field);
    };
  
    handleSubmit = (event) => {
      event.preventDefault();

      const newCard = this.state;
  
      this.props.onFormSubmitCallback(newCard);
  
      this.setState({
        text: '',
        emoji: '',
      });
    };
  
    render() {
  
      return (
        <div className='new-card-form'>
          <h3 className='new-card-form__header'>Add a Note to the Board!</h3>
  
          <form className='new-card-form__form' onSubmit={this.handleSubmit}>
            <div className="new-card-form__form-label">
        
                <input
                  className='new-card-form__form-textarea'
                  name='text'
                  value={this.state.text}
                  placeholder='Add note'
                  type='text'
                  onChange={this.onChangeHandler} 
                />
              
                <input
                  className='new-card-form__form-textarea'
                  name='emoji'
                  value={this.state.emoji}
                  placeholder='Add emoji'
                  type='text'
                  onChange={this.onChangeHandler}
                />
            </div>
  
            <div>
              <input type="submit" value="Add Card" className='new-card-form__form-button' />
            </div>
          </form>
        </div>
      );
    };
};

export default NewCardForm;