import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import HomeButton from '../components/HomeButton';
import './styles/Question.css';

export default function SecondQuestion() {
  return (
    <div className='page-container'>
      <div>
          <h2>2- Qual sua satisfação com a Empresa?</h2>
            <label><input type="radio" name="satisfaction" id="" value="1" />1</label>
            <label><input type="radio" name="satisfaction" id="" value="2" />2</label>
            <label><input type="radio" name="satisfaction" id="" value="3" />3</label>
            <label><input type="radio" name="satisfaction" id="" value="4" />4</label>
            <label><input type="radio" name="satisfaction" id="" value="5" />5</label>
            <label><input type="radio" name="satisfaction" id="" value="6" />6</label>
            <label><input type="radio" name="satisfaction" id="" value="7" />7</label>
            <label><input type="radio" name="satisfaction" id="" value="8" />8</label>
            <label><input type="radio" name="satisfaction" id="" value="9" />9</label>
            <label><input type="radio" name="satisfaction" id="" value="10" />10</label>
          <h4 style={ { display: 'flex',
          flexDirection: 'row' } }><p style={ { marginRight: '160px' } }>Pouco satisfeito</p><p>Muito satisfeito</p></h4>
        </div>

        <div className='page-buttons'>
          <HomeButton />

          <Link to='/results' style={ { textDecoration: 'none' } }>
            <Button
              color="success"
              size='small'
              variant="contained"
            >
              Ver resultados
            </Button>
          </Link> 
        </div>       
    </div>
  );
}
