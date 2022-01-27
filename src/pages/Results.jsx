import React, { useState, useEffect } from 'react';
import HomeButton from '../components/HomeButton';
import { ResponsiveBar } from '@nivo/bar'
import data from '../services/data.json';
import './styles/Results.css';

export default function Results() {
  const [name, setName] = useState('');

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setName(localStorage.getItem('user'));
    }
    console.log(data);
  }, [name])

  const Bar = () => {
    return(
      <>
      <h3>Gráfico 1</h3>
        <ResponsiveBar
          data={data}
          keys='degress'
          indexBy='day'
        />
      </>
    );
  }

  return (
    <div>
      <h2 className='header'>
        { `Olá ${ name }, estes foram os resultados da pesquisa:` }
      </h2>

      {/* Testativa de criar um gráfico */}
      { Bar() }

      <h3>
        Gráfico 2
      </h3>

      <HomeButton />
    </div>
  );
}
