import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import Card from './components/Card';
const API_URL = "https://inspiration-board.herokuapp.com/";

class App extends Component {
  render() {
    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
        <Board
          url="https://inspiration-board.herokuapp.com/boards/"
          boardName={`PhDPlayerHatersDegree`}
          cards={this.cards}
        />
      </section>
    );
  }
}

export default App;
