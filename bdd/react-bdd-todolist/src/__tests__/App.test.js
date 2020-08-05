import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  const { getByTestId, getByText} = render(<App />);
  const input = getByTestId("new-todo")
  const button = getByTestId("add")
  let p = null

  fireEvent.change(input, { target: { value: 'Tarefa 1' } })
  fireEvent.click(button)

  p = getByTestId("paragrafo-0")

  expect(p).toBeInTheDocument()
});




















