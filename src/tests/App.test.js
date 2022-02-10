import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import Home from '../pages/Home';
import renderWithRouter from '../renderWithRouter';
import { AddAlarm } from '@mui/icons-material';

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

  it('Se contém o botão INICIAR PESQUISA', () => {
    renderWithRouter(<Home />);
    const redirectButton = screen.getByText('Iniciar Pesquisa');
    expect(redirectButton).toBeInTheDocument();
  });

  it('Se o botão de INICIAR PESQUISA começa desabilitado', () => {
    renderWithRouter(<Home />);
    const redirectButton = screen.getByText('Iniciar Pesquisa');
    expect(redirectButton).toBeDisabled();
  });

  it('Se o GIF animado aparece na tela', () => {
    renderWithRouter(<Home />);
    const gif = screen.getAllByAltText('gif');
    expect(gif[0]).toBeInTheDocument();
    expect(gif[0].src).toBe('https://c.tenor.com/J2RiuyvQgdEAAAAi/to-do-list-checklist.gif');
  });

  it('Se o botão de INICIAR PESQUISA leva para 1ª pergunta', () => {
    const { history } = renderWithRouter(<Home />);
    const input = screen.getByPlaceholderText('Insira seu nome');
    fireEvent.change(input, { target: { value: 'Matheus' } });
    expect(input.value).toEqual('Matheus');

    const redirectButton = screen.getByText('Iniciar Pesquisa');
    fireEvent.click(redirectButton);

    const url = history.location.pathname;
    expect(url).toBe('/quiz/1');
  });

  it('Se o Footer aparece na tela', () => {
    renderWithRouter(<Home />);
    const footer = screen.getByText('Projeto desenvolvido por:');
    expect(footer).toBeInTheDocument();
  });
});
