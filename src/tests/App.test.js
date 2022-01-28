import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
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

  it('Se contém o botão INICIAR que redireciona para a página de perguntas', () => {
    const { history } = renderWithRouter(<Home />);
    const redirectButton = screen.getByRole('button');
    expect(redirectButton).toBeInTheDocument();
    fireEvent.click(redirectButton);
    const { pathname } = history.location;
    expect(pathname).toBe('/quiz/1');
  });
});
