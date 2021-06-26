import React, { Component } from 'react';
import pokemons from './data';
import Pokedex from './pokedex';

class App extends Component {
  render() {
    return (
      <Pokedex pokemons={pokemons}/>
    )
  }
}

export default App;
