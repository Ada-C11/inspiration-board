import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';

class App extends Component {

//need props in constructor here?
  constructor(props){
    super();

    this.state = {
      errorMessage: null
    };
  }

  showErrorMessage = (error) => {
    console.log('API response error: ', error);
    this.setState({ errorMessage: error.message });
  }


  render() {
    const errorSection = (this.state.errorMessage) ?
    (<section className="error">
       Error: {this.state.errorMessage}
     </section>) : null;
    return (
      <section>
        <header className="header">

        {errorSection}

          <h1 className="header__h1"><span className="header__text"> Elle's Inspirations</span></h1>
        </header>
        <Board
          url="https://inspiration-board.herokuapp.com/boards/"
          boardName={`elle`}
          showErrorMessageCallback={this.showErrorMessage}
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
