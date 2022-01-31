import React from 'react';
import { screen } from '@testing-library/react';
import Home from '../pages/Home';
import renderWithRouter from '../renderWithRouter';

describe('01- Testa a página inicial:', () => {
  it('Testa se a NavBar é renderizada corretamente', () => {
    renderWithRouter(<Home />);
    const navBar = screen.getByRole('navigation');
    expect(navBar).toBeInTheDocument();
    const button = screen.getByText(/Sobre/i);
    expect(button).toBeInTheDocument();
  });

  it('Se contém o título da página', () => {
    renderWithRouter(<Home />);
    const title = screen.getByText('Seja bem-vindo(a) à pesquisa com funcionários');
    expect(title).toBeInTheDocument();
  });

  it('Se contém um input', () => {
    renderWithRouter(<Home />);
    const input = screen.getByPlaceholderText('Insira seu nome');
    expect(input).toBeInTheDocument();
  });

  it('Se contém o botão INICIAR', () => {
    renderWithRouter(<Home />);
    const redirectButton = screen.getByText('Iniciar Pesquisa');
    expect(redirectButton).toBeInTheDocument();
  });
});
