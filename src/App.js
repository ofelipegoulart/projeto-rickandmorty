import './assets/css/App.css';
import React, { Component } from 'react';
import ListCharacter from './components/ListCharacter';
import Footer from './components/Footer';
import mainStyles from './assets/css/mainStyles';

class App extends Component {

  state = {
    data: {
      results: [],
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
    const { nextPage } = this.state;
    const { HeaderDiv, Title, PannelPagination, BtnPagination } = mainStyles;
    return (
      <div>
        <HeaderDiv>
        <Title >Rick and Morty's Characters</Title>
        <PannelPagination>
            {<BtnPagination onClick={() => this.prevFetchCharacters()}>&lt;&lt; Prev</BtnPagination>}
            {<BtnPagination onClick={() => this.nextFetchCharacters()}>&gt;&gt; Next</BtnPagination>}
        </PannelPagination>
        </HeaderDiv>
        <ListCharacter data={this.state.data.results} />
        <Footer data={nextPage} />
      </div>
    )
  }
};

export default App;