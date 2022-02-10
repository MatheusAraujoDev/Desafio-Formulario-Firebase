import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import HomeButton from '../components/HomeButton';
import FirstQuestionInput from '../components/FirstQuestionInput';
import FeedbackImage from '../components/FeedbackImage';
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
      <div style={{ display: 'flex', flexDirection:'column' }}>
        <FirstQuestionInput state={ handleValue } inputValue='1to3' value='1 até 3' />
        <FirstQuestionInput state={ handleValue } inputValue='4to6' value='4 até 6' />
        <FirstQuestionInput state={ handleValue } inputValue='7to9' value='7 até 9' />
        <FirstQuestionInput state={ handleValue } inputValue='10to14' value='10 até 14' />
        <FirstQuestionInput state={ handleValue } inputValue='15more' value='15 ou mais' />
      </div>
    );
  }

  return (
    <>
      <div className='page-container'>
        <h2>1- Quantas pessoas tem sua equipe? </h2>

        <div style={ { display: 'flex', flexDirection: 'column' } }>
          { renderAnswers() }
        </div>

        <div className='page-buttons'>
          <HomeButton />
          <Link
            to={ disabled === true ? '/quiz/1' : '/quiz/2' }
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

      <div className='image'>
        <FeedbackImage />
      </div>
    </>
  );
}
