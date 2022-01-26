import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import './styles/Home.css';
// import { db } from '../firebase';
import {QuestionService} from '../services/QuestionsService'
export default function Home() {
  const [name, setName] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('user')) {
      localStorage.clear();
    }
       QuestionService.getQuestions().then(res => console.log(res.length));
  }, []); 

  useEffect(() => {
    if (name !== '') {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [name, disabled]);

  function setNameToLocalStorage() {
    localStorage.setItem('user', name);
  }

  return (
    <>
      <NavBar className='avatar' />
      <div className='home-container'>
        <h2>Seja bem-vindo(a) à pesquisa com funcionários</h2>

        <div className='label-container'>
          <label>
            <input
              onChange={ (e) => setName(e.target.value) }
              placeholder='Insira seu nome'
              value={ name }
            />
            <Link className='link-questions' to='/quiz/1'>
              <Button
                color='primary'
                disabled={ disabled }
                endIcon={ <SendIcon /> }
                onClick={ setNameToLocalStorage() }
              >Iniciar Pesquisa</Button>
            </Link>
          </label>
        </div>
      </div>
    </>
  );
}
