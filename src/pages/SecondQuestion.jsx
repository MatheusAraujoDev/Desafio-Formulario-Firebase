import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import HomeButton from '../components/HomeButton';
import { QuestionService } from '../services/QuestionsService';
import './styles/Question.css';
import Swal from 'sweetalert2';
export default function SecondQuestion() {
  const [question2, setQuestion2] = useState('');

  function changeThisState(event) {
    setQuestion2(event.target.value);
  }

  function submitQuestions() {
    const question1 = localStorage.getItem('question1');
    QuestionService.sendQuestions(question1, question2);
    Swal.fire(
      'Formulário enviado!',
      'Dados cadastrados com sucesso!',
      'success'
    )
  };

  return (
    <div className='page-container'>
      <div>
          <h2>2- Qual sua satisfação com a Empresa?</h2>
            <label><input type="radio" onClick={(event)=> {changeThisState(event)}} name="satisfaction" value="1" />1</label>
            <label><input type="radio" onClick={(event)=> {changeThisState(event)}} name="satisfaction" value="2" />2</label>
            <label><input type="radio" onClick={(event)=> {changeThisState(event)}} name="satisfaction" value="3" />3</label>
            <label><input type="radio" onClick={(event)=> {changeThisState(event)}} name="satisfaction" value="4" />4</label>
            <label><input type="radio" onClick={(event)=> {changeThisState(event)}} name="satisfaction" value="5" />5</label>
            <label><input type="radio" onClick={(event)=> {changeThisState(event)}} name="satisfaction" value="6" />6</label>
            <label><input type="radio" onClick={(event)=> {changeThisState(event)}} name="satisfaction" value="7" />7</label>
            <label><input type="radio" onClick={(event)=> {changeThisState(event)}} name="satisfaction" value="8" />8</label>
            <label><input type="radio" onClick={(event)=> {changeThisState(event)}} name="satisfaction" value="9" />9</label>
            <label><input type="radio" onClick={(event)=> {changeThisState(event)}} name="satisfaction" value="10" />10</label>
          <h4 style={ { display: 'flex',
          flexDirection: 'row' } }><p style={ { marginRight: '160px' } }>Pouco satisfeito</p><p>Muito satisfeito</p></h4>
        </div>

        <div className='page-buttons'>
          <HomeButton />

          <Link to='/results' style={ { textDecoration: 'none' } }>
            <Button
              color="success"
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
