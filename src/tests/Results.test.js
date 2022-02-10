import React from 'react';
import { render, screen } from '@testing-library/react';
import Results from '../pages/Results';


describe('04- Testa a página de Resultados:', () => {
  it('Testa se a NavBar é renderizada corretamente', () => {
    render(<Results />);
    const navBar = screen.getByRole('navigation');
    expect(navBar).toBeInTheDocument();

    const button = screen.getByText(/Sobre/i);
    expect(button).toBeInTheDocument();
  });

  it('Se contém o título da página', () => {
    render(<Results />);
    const h2 = screen.getByRole('heading', { level: 2 });
    const text = screen.getByText(/estes foram os resultados da pesquisa:/i);
    expect(h2).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  it('Testa se os gráficos aparecem corretamente', () => {
    render(<Results />);
    const h3 = screen.getAllByRole('heading', { level: 3 });
    expect(h3[0]).toHaveTextContent(/Gráfico 1/i);
    expect(h3[1]).toHaveTextContent(/Gráfico 2/i);
  });

  it('Se contém o botão HOME que redireciona para a página inicial', () => {
    render(<Results />);
    const button = screen.getByRole('button', { name: 'Home' });
    expect(button).toBeInTheDocument();
  });
});
