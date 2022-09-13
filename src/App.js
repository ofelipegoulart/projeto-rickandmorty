import './App.css';
import React, { Component } from 'react';
import API from './API.js'
import { render } from '@testing-library/react';

class App extends Component {

  state = {
    characters: [],
  }

  async componentDidMount(){
    const response = await API.get('');
    this.setState({ characters: response.data.results});
  }

  render() {
    const { characters } = this.state;
    return (
      <div>
          <h1 className='title'>Rick and Morty's Characters</h1>
          <div class='wrapper'>
            {characters.map(character => (
              <div className='card'>
                <img className='image' src={character.image}></img>
                <div className='information-card'>
                  <h3 className ='name-character' key={character.id}>{character.name}</h3>
                  <p className='status-character'>Status: {character.status}</p>
                </div>
              </div>
            ))}
          </div>
          
      </div>
    )
  }
};

export default App;
