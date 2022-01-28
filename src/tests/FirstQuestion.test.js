import React from 'react';
import { screen } from '@testing-library/react';
import FirstQuestion from '../pages/FirstQuestion';
import renderWithRouter from '../renderWithRouter';

describe('02- Testa a Tela da primeira pergunta:', () => {
  it('Testa se aparece o texto da pergunta corretamente', () => {
    renderWithRouter(<FirstQuestion />);
    const question = screen.getByText(/Quantas pessoas tem sua equipe?/i);
    expect(question).toBeInTheDocument();
  });

  it('Testa se o botão começa desabilitado', () => {
    renderWithRouter(<FirstQuestion />);
    const button = screen.getByRole('button', { name: 'Próxima' });
    expect(button).toBeDisabled();
  });

  it('Testa se as alternativas da pergunta são renderizadas', () => {
    renderWithRouter(<FirstQuestion />);
    const input = screen.getAllByTestId('peopleAmount');
    expect(input).toHaveLength(5);
  });

  it('Testa se na tela possui dois botões', () => {
    renderWithRouter(<FirstQuestion />);
    const button1 = screen.getByRole('button', { name: 'Home' });
    const button2 = screen.getByRole('button', { name: 'Próxima' });
    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
  }); 
});
