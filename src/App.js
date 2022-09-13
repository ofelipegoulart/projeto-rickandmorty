import './App.css';
import React, { Component } from 'react';
import API from './API.js'
import { render } from '@testing-library/react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      characters: [],
    };
    this._onButtonClick = this._onButtonClick.bind(this);
    
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  async componentDidMount(){
    const response = await API.get('');
    this.setState({ 
      characters: response.data.results
    });
    }

    
  render() {
    const { characters } = this.state;
    const { showComponent } = this.state; 
    return (
      <div>
          <h1 className='title'>Rick and Morty's Characters</h1>
          <div style={{ display: (showComponent ? 'block' : 'none') }}>
          <button className='btn-character' onClick={() => this.setState({showComponent: !showComponent})}>Go back</button>

          </div>
          {/* Pensar na tela secundária */}
          <div class='wrapper' style={{display: (showComponent ? 'none' : 'grid')}}>
            
            {characters.map(character => (
              <div className='card'>
                <img className='image' src={character.image}></img>
                <div className='information-card'>
                  <h3 className ='name-character' key={character.id}>{character.name}</h3>
                  <p className='status-character'>Status: <span>{character.status}</span></p>
                  <button className='btn-character' onClick={() => this.setState({ showComponent: !showComponent })}>See more</button>
                </div>
              </div>
            ))}
            
          </div>
          
      </div>
    )
  }
};

export default App;
