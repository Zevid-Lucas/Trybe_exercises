import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Item from '../Item';
import App from '../App.js';

describe('Exercício 1 - Testes do botão', () => {
  it('Verifica se botão é renderizado', () => {
    const { getByRole } = render(<App />)
    const button = getByRole('button');
    expect(button).toBeInTheDocument()
  })

  it('Verifica se botão tem texto Adicionar', () => {
    const { getByText } = render(<App />);
    const textBtn = getByText('Adicionar');
    expect(textBtn).toBeInTheDocument()
  })

  it('Verifica se tarefas são adicionadas ao clicar no botão', () => {
    const { getByLabelText, queryByText } = render(<App />);

    const inputTask = getByLabelText('Tarefa:');
    const buttonAdd = queryByText('Adicionar');
    fireEvent.change(inputTask, { target: { value: 'Atividade Trybe' } });
    expect(queryByText('Atividade Trybe')).not.toBeInTheDocument();
    fireEvent.click(buttonAdd);
    expect(queryByText('Atividade Trybe')).toBeInTheDocument();
  })
})

describe('Exercício 2 - Teste de Aplicação', () => {
  it('Verifica adição de vários itens no array', () => {
    const listTodo = ['Atividade Trybe', 'Inglês', 'Digitação'];

    const {getByLabelText, getByText} = render(<App />);
    const inputTask = getByLabelText('Tarefa:');
    const btnAdd = getByText('Adicionar');

    listTodo.forEach((task) => {
      fireEvent.change(inputTask, { target: { value: task } });
      fireEvent.click(btnAdd);
    });

    listTodo.forEach((task) => {
      expect(getByText(task)).toBeInTheDocument();
    });
  });
});

describe('Testa o Componente Item', () => {
  it('Ao receber uma string na props ela precisa aparecer na tela.', () => {
    const { getByText } = render(<Item content="Estudar lógica" />);
    expect(getByText('Estudar lógica')).toBeInTheDocument();
  });
});
