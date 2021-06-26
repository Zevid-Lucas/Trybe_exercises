import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;
    return (
      <section className={pokemon.type}>
        <div className="card-pokemon" >
          <h4>{pokemon.name}</h4>
          <p>{pokemon.type}</p>
          <p>Peso: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit} </p>
        </div>
          <div className="img-pokemon">
            <img className="img-pokemon" src={pokemon.image} alt={pokemon.name} />
          </div>
      </section>
    )
  }
}

export default Pokemon;