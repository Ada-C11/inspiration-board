import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]


class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardId:90909090, // set state from prop which gets maxID
      text: '',
      emoji: '',
    };
  }

  onInputChange = (event) => {
    const field = {} // need this line?
    field[event.target.name] = event.target.value;
    this.setState(field);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addCardCallback({

        text: this.state.text,
        emoji: this.state.emoji
    });
    this.setState({
      // cardId: {},
      text: '', //this.state.text,  // this should clear the form
      emoji: '' //this.state.emoji
    });


  }



  render() {
    return (
      <section>
        <h3>Add a Card</h3>
        <form  className="" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="text">Inspiration:</label>
            <input
              name="text"
              value={this.state.text}
              onChange={this.onInputChange}
              className=''
            />
          </div>

          <div>
            <label htmlFor="emoji">Emoji:</label>
            <input
              name="emoji"
              value={this.state.emoji}
              onChange={this.onInputChange}
              className=''
            />
          </div>

          <input className="" type="submit" name="submit" value="add card" />

        </form>
      </section>
    );
  }


}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
