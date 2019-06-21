import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import axios from 'axios';
import NewCardForm from './components/NewCardForm';

const BOARD = 'Svalbard'
const URL = `https://inspiration-board.herokuapp.com/boards/${BOARD}/cards`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardList: [],
      message: '',
    }
  }

  
  componentDidMount() {
    // get request for all cards on this board
    axios.get(URL)
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

  onSubmitNewCardCallback = (newCard) => {
    // pet that we're getting from the form
    const cardDataForApi = {
      text: newCard.text,
      emoji: newCard.emoji
    };

    console.log('we\'re in the app! in the blah blah blah');
    // posting this new card to the API - updating the backend
    axios.post(URL, cardDataForApi) 
  
      .then((response) => {
        let updatedCardList = this.state.cardList;
        updatedCardList.push({
          text: newCard.text,
          emoji: newCard.emoji,
          id: response.data.id
        });

        // setting state to incorporate new card - updating the frontend
        this.setState({
          cardList: updatedCardList,
        });
      })
      .catch((error) => {
        console.log(error.messages);
    
        this.setState({
          message: error.message
        });
      });
    
    window.location.reload();
  }


  render() {

    const onRemoveCallback = (id) => {
      for (let i = 0; i < this.state.cardList.length; i++) { 
        if (this.state.cardList[i].id === id) {

          let updatedCardList = this.state.cardList
          updatedCardList.splice(i, 1)
  
          this.setState({ cardList: updatedCardList })
        };
      }
    }

    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
        <section className='messages'>
          {this.state.message}
        </section>
        <section className='cardForm'>
          <NewCardForm 
          onSubmitNewCardCallback={this.onSubmitNewCardCallback}
          />
        </section>
        <section className='board'>
        <Board
          url="https://inspiration-board.herokuapp.com/boards/"
          boardName={`Svalbard`}
          cardList={this.state.cardList}
          onRemoveCallback={onRemoveCallback}
          />
        </section>
      </section>
    );
  }
}

export default App;
