import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
      emoji: props.emoji,
      id: props.id,
      deleteClickEvent: props.deleteHandler,
      showSelf: true,
    }

    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler = () => {
    this.state.deleteClickEvent(this.state.id);
    this.setState({ showSelf: false });
  }


  render() {
    return (
      <section>
      {this.state.showSelf ? (
      <section className="card">
          <section className="card__content">
            <p className="card__content-text">
              {this.state.text}
            </p>
            <span className="card__content-emoji">
              {emoji.getUnicode(`${this.state.emoji}`)}
            </span>
            <br />
            <br />
            <button className="card__delete" onClick={this.clickHandler}>Delete</button>
          </section>
          </section>
        ) : ("")};
    </section>
    )};

 };

  Card.propTypes = {
    text: PropTypes.string,
    emoji: PropTypes.string,
    id: PropTypes.number.isRequired,
    deleteHandler: PropTypes.func.isRequired,
  };

  export default Card;
