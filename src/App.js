import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Heather's Inspiration Board</span></h1>
        </header>
        <section className='board'>
        <Board
          url="https://inspiration-board.herokuapp.com/boards/"
          boardName={`heather`}
          />
          </section>
      </section>
    );
  }
}

export default App;
