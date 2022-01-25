import React from 'react';
import Logo from './KPI_Logo.png';
import { Button } from '@mui/material';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav>
      <img alt='logo Key People Insights' src={ Logo } />
      <Button variant="contained" href='https://www.kpis.tech/'>Sobre</Button>
    </nav>
  );
}
