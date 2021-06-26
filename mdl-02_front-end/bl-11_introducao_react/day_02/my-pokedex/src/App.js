import React, { Component } from 'react';
import pokemons from './data';
import Pokedex from './pokedex';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Pokedex pokemons={pokemons}/>
      </main>
    )
  }
}

export default App;
