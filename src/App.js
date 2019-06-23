import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import BoardSelector from './components/BoardSelector'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardName: "Kirsten-Anderson"
    }
  }

  onBoardChange = (name) => {
    this.setState ({
      boardName: name
    })
  }

  render() {
     return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
        
        <BoardSelector onBoardChangeCallback={this.onBoardChange} 
        url="https://inspiration-board.herokuapp.com/boards/"/>
        
        <Board
          url="https://inspiration-board.herokuapp.com/boards/"
          deleteUrl="https://inspiration-board.herokuapp.com/cards"
          boardName={this.state.boardName}
          key={this.state.boardName}
        />
      </section>
    );
  }
}

export default App;
