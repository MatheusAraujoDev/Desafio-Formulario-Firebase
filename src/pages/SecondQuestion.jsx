import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import HomeButton from '../components/HomeButton';
import ComingBackButton from '../components/ComingBackButton';
import SecondQuestionInput from '../components/SecondQuestionInput';
import FeedbackImage from '../components/FeedbackImage';
import { QuestionService } from '../services/QuestionsService';
import './styles/SecondQuestion.css';
import Swal from 'sweetalert2';

export default function SecondQuestion() {
  const [question2, setQuestion2] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (question2 !== '') {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [question2, disabled])

  const handleValue = (event) => setQuestion2(event.target.value);

  function renderAnswers() {
    return (
      <>
        <SecondQuestionInput state={ handleValue } inputValue='1' value='1' />
        <SecondQuestionInput state={ handleValue } inputValue='2' value='2' />
        <SecondQuestionInput state={ handleValue } inputValue='3' value='3' />
        <SecondQuestionInput state={ handleValue } inputValue='4' value='4' />
        <SecondQuestionInput state={ handleValue } inputValue='5' value='5' />
        <SecondQuestionInput state={ handleValue } inputValue='6' value='6' />
        <SecondQuestionInput state={ handleValue } inputValue='7' value='7' />
        <SecondQuestionInput state={ handleValue } inputValue='8' value='8' />
        <SecondQuestionInput state={ handleValue } inputValue='9' value='9' />
        <SecondQuestionInput state={ handleValue } inputValue='10' value='10' />
      </>
    )
  }

  function submitQuestions() {
    const question1 = localStorage.getItem('question1');
    QuestionService.sendQuestions(question1, question2);

    // SweetAlerts: https://sweetalert2.github.io/#download
    Swal.fire(
      'Formulário enviado!',
      'Dados cadastrados com sucesso!',
      'success'
    )
  };

  return (
    <>
      <div className='page-container'>
        <h2>2- Qual a sua satisfação com a Empresa?</h2>

        <div className='page-answers'>
          { renderAnswers() }
        </div>

        <h4 style={ { display: 'flex',
        flexDirection: 'row' } }><p style={ { marginRight: '220px' } }>Pouco satisfeito</p><p>Muito satisfeito</p></h4>

        <div className='page-buttons'>
          <HomeButton />
          <ComingBackButton text='/quiz/1' />
          <Link
            to={ disabled === true ? '/quiz/2' : '/results' }
            style={ { textDecoration: 'none' } }
          >
            <Button
              color="success"
              disabled={ disabled }
              size='small'
              onClick={ submitQuestions }
              variant="contained"
            >
              Ver resultados
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
