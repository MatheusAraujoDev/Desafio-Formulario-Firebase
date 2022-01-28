import React from 'react';
import { screen } from '@testing-library/react';
import SecondQuestion from '../pages/SecondQuestion';
import renderWithRouter from '../renderWithRouter';

describe('03- Testa a Tela da segunda pergunta:', () => {
  it('Testa se aparece o texto da pergunta corretamente', () => {
    renderWithRouter(<SecondQuestion />);
    const question = screen.getByText(/Qual a sua satisfação com a Empresa?/i);
    expect(question).toBeInTheDocument();
  });

  it('Testa se o botão VER RESULTADOS começa desabilitado', () => {
    renderWithRouter(<SecondQuestion />);
    const button = screen.getByRole('button', { name: 'Ver resultados' });
    expect(button).toBeDisabled();
  });

  it('Testa se as alternativas da pergunta são renderizadas', () => {
    renderWithRouter(<SecondQuestion />);
    const input = screen.getAllByTestId('satisfaction');
    expect(input).toHaveLength(10);
  });

  it('Testa se na tela possui dois botões', () => {
    renderWithRouter(<SecondQuestion />);
    const button1 = screen.getByRole('button', { name: 'Home' });
    const button2 = screen.getByRole('button', { name: 'Ver resultados' });
    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
  }); 
});
