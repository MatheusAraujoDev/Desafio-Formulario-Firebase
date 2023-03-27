import React from 'react';
import { Button } from '@mui/material';
import './styles/NavBar.css';

export default function NavBar() {
  function handleClick() {
    return alert('url da página da empresa!')
  }

  return (
    <nav>
      <h1 className='company-title'>Nome da Empresa</h1>
      <Button variant="contained" onClick={handleClick}>Sobre</Button>
    </nav>
  );
}
