import './App.css';
import React, { Component } from 'react';
import API from './API.js'
import Dialog from './components/Dialog';
import CharacterItem from './components/Dialog';
import { render } from '@testing-library/react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      showComponent: false,
    };
  }

  async componentDidMount(){
    const response = await API.get('');
    this.setState({ 
      characters: response.data.results
    });
    }

  render() {
    const { characters, showComponent } = this.state;
    return (
      <div>
        <h1 className='title'>Rick and Morty's Characters</h1>
        { showComponent && <Dialog button={() => this.setState({ showComponent: !showComponent })}/> }
        <div class='wrapper'>
        { !showComponent && characters.map(character => (
              <div className='card'>
                <img className='image' src={character.image}></img>
                <div className='information-card'>
                  <h3 className ='name-character' key={character.id}>{character.name}</h3>
                  <p className='status-character'>Status: {character.status}</p>
                  <button className='btn-character' onClick={() => this.setState({ showComponent: !showComponent })}>See more</button>
                </div>
              </div>
            ))}
        </div>
      </div>
 )}
};

export default App;
