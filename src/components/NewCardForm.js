import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {

    render() {
  
        return (
          <div className="new-card-form">
           <h3 className="new-card-form__header">Submit a New Card</h3>
           <form className="new-card-form__form"> 
               <div>
               <textarea className="new-card-form__form-textarea" placeholder="Enter Stuff Here">
            {/* //   name="firstAdjective"
            //   value={firstAdjective}
            //   onChange={this.onInputChange} */}
              </textarea>
               </div>
               <div>
               <input
            //   name="firstAdjective"
            //   value={firstAdjective}
            //   onChange={this.onInputChange}
              placeholder="emoji"
              type="text" />
               </div>

               <div>
                <input className="new-card-form__form-button" type="submit" value="Submit Card"/>
              </div>
           </form>
          </div>
        )
      }
}

export default NewCardForm;