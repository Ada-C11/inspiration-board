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
          emoji: "",
        }
      }
    

    onSubmitCardButtonClick = (event) => {
        event.preventDefault();
        this.props.addCardCallback();
    }

    onInputChange = (event) => {
        console.log("Inside onInputChange");
    }

    render() {
  
        return (
          <div className="new-card-form">
           <h3 className="new-card-form__header">Submit a New Card</h3>
           <form className="new-card-form__form"> 

               <div>
                <textarea
                  onChange={this.onInputChange}
                  className="new-card-form__form-textarea"
                  placeholder="Enter Stuff Here">              
                </textarea>
               </div>

               <div>
                <input
                  placeholder="emoji"
                  type="text" />
               </div>

               <div>
                <input onClick={this.onSubmitCardButtonClick} className="new-card-form__form-button" type="submit" value="Submit Card"/>
              </div>

           </form>
          </div>
        )
      }
}

export default NewCardForm;

NewCardForm.propTypes = {
    addCardCallback: PropTypes.func,
  };