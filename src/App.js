import './App.css';
import React, { Component } from 'react';
import API from './API.js';
import Dialog from './components/Dialog';
import { render } from '@testing-library/react';
import CharacterItem from './components/CharacterItem';

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
          <CharacterItem key={character.id}
                         image={character.image} 
                         name={character.name}
                         status={character.status} 
                         button={() => this.setState({ showComponent: !showComponent })} />
         ))}
        </div>
      </div>
 )}
};

export default App;
