import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import HomeButton from '../components/HomeButton';
import './styles/Question.css';

export default function FirstQuestion() {
  return (
    <div className='page-container'>
      <h2>1- Quantas pessoas tem sua equipe? </h2>
        <div style={
        {
          display: 'flex',
          flexDirection: 'column' }
        }>
          <label>
            <input type="radio" name='peopleAmount' value="1 até 3" />1 até 3
          </label>
          <label>
            <input type="radio" name='peopleAmount' value="4 até 6" />4 até 6
          </label>
          <label> 
            <input type="radio" name='peopleAmount' value="7 até 9" />7 até 9
          </label>
          <label> 
            <input type="radio" name='peopleAmount' value="10 até 14" />10 até 14
          </label>
          <label> 
            <input type="radio" name='peopleAmount' value="15 ou mais" />15 ou mais
          </label>
        </div>

        <div className='page-buttons'>
          <HomeButton />

          <Link to='/quiz/2' style={ { textDecoration: 'none' } }>
            <Button
              color="success"
              size='small'
              variant="contained"
            >
              Próxima
            </Button>
          </Link>
        </div>
        
    </div>
  );
}
