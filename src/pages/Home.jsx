import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1>Seja bem-vindo(a) à pesquisa com funcionários</h1>

      <label>
        <input placeholder='Insira seu nome' />
        <Link to='/quiz'>
          <button
            type='submit'
          >
            Iniciar pesquisa
          </button>
        </Link>
      </label>
    </>
  );
}
