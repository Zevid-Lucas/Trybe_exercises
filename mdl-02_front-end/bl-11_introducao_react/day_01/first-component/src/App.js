import React from 'react'
import Task from './firstComponent.js';

const tasks = ['Estudar inglês', 'Estudar conteúdo da trybe', 'Realizar exercícios']
class FirstComponent extends React.Component {
  render() {
    return (
      <ul>{ tasks.map(task => Task(task)) }</ul>
    );
  }
};

export default FirstComponent

