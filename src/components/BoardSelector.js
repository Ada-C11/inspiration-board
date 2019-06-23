import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';


class BoardSelector extends Component {
  constructor (props) {
    super(props);
    this.state = {
      boards: []
    }
  }

  componentDidMount () {
    Axios.get(this.props.url) 
    .then ((response) => {
      const boards = response.data.map((item) => {
        return item.board.name;
      });

      this.setState ({
        boards,
      });
    })

    .catch ((error) => {
      console.log(error);
    });
  }

  generateOptions = () => {
    return this.state.boards.map((board, index) => {
      return <option value={board} key={index}>{board}</option>
    })

  }

  onChangeSelect = (event) => {
    this.props.onBoardChangeCallback(event.target.value);
  }

  render () {
    return (
      <section className="new-card-form">
        <label htmlFor="board-select" className="new-card-form__form-label">Select a Board: </label>
      <select className="new-card-form__form-select"
      onChange={this.onChangeSelect}>
        {this.generateOptions()}
      </select>
      </section>
    )
  }
}

BoardSelector.propTypes = {
  onBoardChangeCallback: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};

export default BoardSelector;