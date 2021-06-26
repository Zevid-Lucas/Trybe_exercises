import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;
    return (
      <section>
        <h4>{pokemon.name}</h4>
        <p>{pokemon.type}</p>
        <p>Peso: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit} </p>
        <img src={pokemon.image} alt={pokemon.name} />
      </section>
    )
  }
}

export default Pokemon;