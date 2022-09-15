import './App.css';
import React, { Component, useState } from 'react';
import API from './API.js';
import Dialog from './components/Dialog';
import ListCharacter from './components/ListCharacter';
import { render } from '@testing-library/react';

function CharacterItem (props) {
  const { character } = props;
};

  class App extends Component {
    state = {
      data: {
        results: []
      },
      nextPage:1
    };
  
    componentDidMount() {
      this.prevFetchCharacters();
      this.nextFetchCharacters();
    }
  
    nextFetchCharacters = async () => {  
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
        );
        const data = await response.json();
  
        this.setState({
          data: {
            info: data.info,
            results: data.results
          },
          nextPage: this.state.nextPage + 1,
        });
      };

    prevFetchCharacters = async () => {  
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
        );

        const data = await response.json();
        console.log(this.state.nextPage)
  
        this.setState({
          nextPage: this.state.nextPage - 1,
        });
    };
    
    render() {
      const { nextPage, results } = this.state;
      return (
      <div>
        <h1 className='title'>Rick and Morty's Characters</h1>
        {<button onClick={() => this.prevFetchCharacters()}>Previous</button>}
        {<button onClick={() => this.nextFetchCharacters()}>Next</button>}
        <ListCharacter data={this.state.data.results} />
      </div>
        )
  }
};
export default App;