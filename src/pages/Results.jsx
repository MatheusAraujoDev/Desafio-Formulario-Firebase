import React, { useState, useEffect } from 'react';
import HomeButton from '../components/HomeButton';
import FirstTable from '../components/FirstTable';
import NavBar from '../components/NavBar';
import './styles/Results.css';

export default function Results() {
  const [name, setName] = useState('');

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setName(localStorage.getItem('user'));
    }
  }, [name]);

  const data = [
    {"day":"Monday", "degress": 59},
    {"day":"Tuesday", "degress": 61},
    {"day":"Wednesday", "degress": 55},
    {"day":"Thursday", "degress": 78},
    {"day":"Friday", "degress": 71},
    {"day":"Saturday", "degress": 56},
    {"day":"Sunday", "degress": 67}
  ];

  const Bar = () => {
    return(
      <>
      <div style={{height:400}}>
        <FirstTable data={data} />
      </div>
      </>
    );
  }

  return (
    <div>
      <NavBar />
      <h2 className='header'>
        { `Olá ${ name }, estes foram os resultados da pesquisa:` }
      </h2>

      <h3>Gráfico 1</h3>
      { Bar() }

      <h3>
        Gráfico 2
      </h3>

      <HomeButton />
    </div>
  );
}
