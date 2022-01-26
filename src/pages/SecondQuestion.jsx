import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import HomeButton from '../components/HomeButton';
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
    return(
      <>
        <label><input type="radio" onClick={ handleValue } name="satisfaction" value="1" />1</label>
        <label><input type="radio" onClick={ handleValue } name="satisfaction" value="2" />2</label>
        <label><input type="radio" onClick={ handleValue } name="satisfaction" value="3" />3</label>
        <label><input type="radio" onClick={ handleValue } name="satisfaction" value="4" />4</label>
        <label><input type="radio" onClick={ handleValue } name="satisfaction" value="5" />5</label>
        <label><input type="radio" onClick={ handleValue } name="satisfaction" value="6" />6</label>
        <label><input type="radio" onClick={ handleValue } name="satisfaction" value="7" />7</label>
        <label><input type="radio" onClick={ handleValue } name="satisfaction" value="8" />8</label>
        <label><input type="radio" onClick={ handleValue } name="satisfaction" value="9" />9</label>
        <label><input type="radio" onClick={ handleValue } name="satisfaction" value="10" />10</label>
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
    <div className='page-container'>

      <h2>2- Qual a sua satisfação com a Empresa?</h2>

      <div className='page-answers'>
         { renderAnswers() }
      </div>
      <h4 style={ { display: 'flex',
      flexDirection: 'row' } }><p style={ { marginRight: '220px' } }>Pouco satisfeito</p><p>Muito satisfeito</p></h4>

      <div className='page-buttons'>
        <HomeButton />

        <Link to='/results' style={ { textDecoration: 'none' } }>
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
  );
}
