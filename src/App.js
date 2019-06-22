import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
        <Board
          url="https://inspiration-board.herokuapp.com/boards/"
          cardsUrl="https://inspiration-board.herokuapp.com/cards/"
          boardName={`Nara's Board`}
          />
      </section>
    );
  }
}

export default App;
