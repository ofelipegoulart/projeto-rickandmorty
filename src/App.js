import './App.css';
import React, { Component, useState } from 'react';
import Dialog from './components/Dialog';
import ListCharacter from './components/ListCharacter';
import { render } from '@testing-library/react';

class App extends Component {
  state = {
    data: {
      results: []
    },
    characterInfo: '',
    nextPage: 1,
    infoCharacter: '',
  };

  // Mecanismo de Paginação
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

    
    this.setState({
      data: {
        info: data.info,
        results: data.results
      },
      nextPage: this.state.nextPage - 1,
    });
  };

  render() {
    const { nextPage, results } = this.state;
    return (
      <div>
        <div className='header'>
        <h1 className='title'>Rick and Morty's Characters</h1>
        <div className='pannel-pagination'>
          {<button className='btn-pagination' onClick={() => this.prevFetchCharacters()}>&lt;&lt; Prev</button>}
          {<button className='btn-pagination' onClick={() => this.nextFetchCharacters()}>Next &gt;&gt;</button>}
        </div>
        </div>
        <ListCharacter data={this.state.data.results} />
        
      <div className='footer'>
        <div className='container-footer'>
          <p className='counter-page'>You're at page {nextPage} of 42.</p>
          <p className='author-page'>Developed by Felipe Goulart</p>
        </div>
      </div>
      </div>
    )
  }
};
export default App;