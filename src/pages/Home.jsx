import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Footer from '../components/Footer';
import './styles/Home.css';

export default function Home() {
  const [name, setName] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('user')) {
      localStorage.clear();
    }
  }, []); 

  useEffect(() => {
    if (name.trim()) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [name, disabled]);

  function setNameToLocalStorage() {
    return localStorage.setItem('user', name);
  }

  return (
    <>
      <NavBar />

      <div className='home-container'>

        <h2>Seja bem-vindo(a) à pesquisa com funcionários</h2>

        <div className='label-container'>
          <label>
            <input
              onChange={ (e) => setName(e.target.value) }
              placeholder='Insira seu nome'
              value={ name }
            />
            <Link
              disabled={ disabled }
              className='link-questions'
              to={ disabled === true ? '' : '/quiz/1'}
            >
              <Button
                color='primary'
                disabled={ disabled }
                endIcon={ <SendIcon /> }
                onClick={ setNameToLocalStorage() }
              >
                Iniciar Pesquisa
              </Button>
            </Link>
          </label>
        </div>

        <img
          alt='gif'
          style={ { height: '200px', width: '200px', marginTop: '60px' } }
          src='https://c.tenor.com/J2RiuyvQgdEAAAAi/to-do-list-checklist.gif'
        />

        <Footer />

      </div>
    </>
  );
}
