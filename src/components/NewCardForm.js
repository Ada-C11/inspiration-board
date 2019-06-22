import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';
class NewCardForm extends Component {
    constructor(props) {
      super(props);
  
      this.cleared = {
        text: "",
        emoji: "",
      };
  
      this.state = {...this.cleared}
    }
    
    addCard = (event) => {
      event.preventDefault();
  
      const card = this.state;
  
      this.props.addCardCallback(card)
  
      this.setState({...this.cleared});
    }
  
    onInputChange = (event) => {
      const updatedState = {};
    
      const field = event.target.name;
      const value = event.target.value;
    
      updatedState[field] = value;
      this.setState(updatedState);
    }
  
    render() {
      const EMOJI_LIST = ["heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"];
      const emojiDropdown = EMOJI_LIST.map((emojiOption, i) => {
        return <option key={i} value={emojiOption}>{emoji.getUnicode(emojiOption)}</option>
      })
      return (
        <div className="new-card-form"> 
            <form  className="new-card-form__form" onSubmit={this.addCard}>
            <h3 className="new-card-form__header">Add a Card</h3>
            <label className="new-card-form__form-label">
                Text: 
                <textarea 
                name="text" 
                type="text"
                className="new-card-form__form-textarea"
                value={this.state.text}
                onChange={this.onInputChange}></textarea>
            </label>
            <label className="new-card-form__form-label">
                Emoji:
                <select 
                className="new-card-form__form-select"
                name="emoji"  
                value={this.state.emoji}
                onChange={this.onInputChange}>
                    <option value="">Please Select an Emoji</option>
                    { emojiDropdown }
                </select>
            </label>
            <input className="new-card-form__form-button" type="submit" name="submit" value="Add a Card!" />
            </form>
        </div> 
      );
    }
  
  
  }
  
  NewCardForm.propTypes = {
    addCardCallback: PropTypes.func.isRequired,
  };
  
  export default NewCardForm;