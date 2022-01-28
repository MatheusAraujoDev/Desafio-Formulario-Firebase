/* eslint-disable no-sequences */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import HomeButton from '../components/HomeButton';
import './styles/FirstQuestion.css';

export default function FirstQuestion() {
  const [question, setQuestion] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (question !== '') {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [question, disabled]);

  function handleQuestion() {
    return localStorage.setItem('question1', question);
  };

  const handleValue = (event) => setQuestion(event.target.value);

  function renderAnswers() {
    return (
      <>
        <label htmlFor='peopleAmount'>
          <input type="radio" onClick={ handleValue } data-testid='peopleAmount' name='peopleAmount' value="1to3" />1 até 3
        </label>
        <label htmlFor='peopleAmount'>
          <input type="radio" onClick={ handleValue } data-testid='peopleAmount' name='peopleAmount' value="4to6" />4 até 6
        </label>
        <label htmlFor='peopleAmount'> 
          <input type="radio" onClick={ handleValue } data-testid='peopleAmount' name='peopleAmount' value="7to9" />7 até 9
        </label>
        <label htmlFor='peopleAmount'> 
          <input type="radio" onClick={ handleValue } data-testid='peopleAmount' name='peopleAmount' value="10to14" />10 até 14
        </label>
        <label htmlFor='peopleAmount'> 
          <input type="radio" onClick={ handleValue } data-testid='peopleAmount' name='peopleAmount' value="15more" />15 ou mais
        </label>
      </>
    )
  }

  return (
    <div className='page-container'>
      <h2>1- Quantas pessoas tem sua equipe? </h2>

      <div style={ { display: 'flex', flexDirection: 'column' } }>
        { renderAnswers() }
      </div>

      <div className='page-buttons'>
        <HomeButton />
        <Link
          to={ disabled === true ? null : '/quiz/2' }
          style={ { textDecoration: 'none' } }
        >
          <Button
            color="success"
            disabled={ disabled }
            size='small'
            onClick={ handleQuestion() }
            variant="contained"
          >
            Próxima
          </Button>
        </Link>
      </div>

    </div>
  );
}
