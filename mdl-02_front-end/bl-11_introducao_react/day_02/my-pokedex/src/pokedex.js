import React, { Component } from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class Pokedex extends Component {
  render() {
    const {pokemons} = this.props;
    return (
      <article>
        {pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
      </article>
    )
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Pokedex;