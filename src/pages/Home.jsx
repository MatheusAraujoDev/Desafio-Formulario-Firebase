import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import './Home.css';

export default function Home() {
  return (
    <>
      <NavBar className='avatar' />
      <div className='home-container'>
        <h1>Seja bem-vindo(a) à pesquisa com funcionários</h1>

        <div className='label-container'>
          <label>
            <input placeholder='Insira seu nome' />
            <Link className='link-questions' to='/quiz'>
            <Button endIcon={<SendIcon />} color='primary' >Iniciar Pesquisa</Button>
            </Link>
          </label>
        </div>
      </div>
    </>
  );
}
