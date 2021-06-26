import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
}

export default Pokemon;