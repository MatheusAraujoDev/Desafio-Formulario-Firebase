import React, { useState, useEffect } from 'react';
import HomeButton from '../components/HomeButton';
// imṕort './styles/Results.css';

export default function Results() {
  const [name, setName] = useState('');

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setName(localStorage.getItem('user'));
    }
  }, [name])

  return (
    <div>
      <h2>
        { `Olá ${ name } estes foram os resultados da pesquisa:` }
      </h2>

      <h3>
        Gráfico 1
      </h3>

      <h3>
        Gráfico 2
      </h3>

      <HomeButton />
    </div>
  );
}
