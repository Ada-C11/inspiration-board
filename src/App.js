import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';

class App extends Component {


  constructor(props){
    super();

    this.state = {
      error: null
    };
  }

  showErrorMessage = (error) => {
    this.setState({ error: error.message });
  }

  render() {
    return (
      <section>
        <header className="header">
        const errorSection = {(this.state.error) ? (<section className='error'>Error: { this.state.error.message }</section>) : null};
          <h1 className="header__h1"><span className="header__text"> Elle's Inspirations</span></h1>
        </header>
        <Board
          url="https://inspiration-board.herokuapp.com/boards/"
          boardName={`elle`}
          />
      </section>
    );
  }
}

export default App;

// {
//     "board": {
//         "id": 63,
//         "name": "elle"
//     }
// }

// API Documentation:
// https://github.com/AdaGold/inspiration-board-api
