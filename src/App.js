import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardList: [],
      message: '',
      board: 'Svalbard',
    }
  }

  
  componentDidMount() {
    // get request for all cards on this board
    axios.get(`https://inspiration-board.herokuapp.com/boards/${this.state.board}/cards`)
    .then((response) => {
      const cards = response.data.map((cardItem) => {
          return cardItem.card;
      });
      this.setState({ cardList: cards });
    })
    .catch((error) => {
      // Show an error
      console.log(error.messages)

      // updating message state
      this.setState({
        message: error.message
      })
  })
}

 


  render() {
    console.log(this.state.cardList);

    const onRemoveCallback = (id) => {

      console.log(`THIS IS THE ID WE WANT TO DELETE ${id}`)
      for (let i = 0; i < this.state.cardList.length; i++) { 
        if (this.state.cardList[i].id === id) {
          console.log('deleting')
          let updatedCardList = this.state.cardList
          updatedCardList.splice(i, 1)
  
          this.setState({ cardList: updatedCardList })
        };
      }
      console.log(id);
    }

    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
        <section>
          {this.state.message}
        </section>
        <Board
          url="https://inspiration-board.herokuapp.com/boards/"
          boardName={`Svalbard`}
          cardList={this.state.cardList}
          onRemoveCallback={onRemoveCallback}
          />
      </section>
    );
  }
}

export default App;
