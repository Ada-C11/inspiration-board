import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  // constructor(props) {
  //   super(props);

  //   // this.state = {
  //   //   text: ,
  //   //   //emoji://optional,
  //   // };
  // }

  render() {
    return (
      <div className="card">
        {this.props.text}
      </div>
    )
  }
}

// Card.propTypes = {
//   text: PropTypes.string.isRequired,
//   //emoji: PropTypes.emoji.isRequired
// };

export default Card;
