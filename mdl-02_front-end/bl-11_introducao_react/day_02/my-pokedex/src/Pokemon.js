import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;
    return (
      <section>
        <h4>{pokemon.name}</h4>
        <p>Elétrico</p>
        <p>Peso: 6.0 Kg</p>
      </section>
    )
  }
}

export default Pokemon;