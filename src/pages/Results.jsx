import React, { useState, useEffect } from 'react';
import HomeButton from '../components/HomeButton';
import NavBar from '../components/NavBar';
import './styles/Results.css';
import { QuestionService } from '../services/QuestionsService';
import {FirstGraphic} from '../components/FirstGraphic';
import {SecondGraphic} from '../components/SecondGraphic';

export default function Results() {
  const [name, setName] = useState('');
  const [response, setResponse] = useState([]);

  useEffect(() => {
    QuestionService.getQuestions().then((questions) => {
      setResponse(questions);
    })
  }, []);

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setName(localStorage.getItem('user'));
    }
  }, [name]);

  return (
    <div>
      <NavBar />
      <h2 className='header'>
        { `Olá ${ name }, estes foram os resultados da pesquisa:` }
      </h2>

      <h3>Gráfico 1</h3>
      <div style={{height:300}}> 
        <FirstGraphic response={response} />
      </div>

      <h3>Gráfico 2</h3>
      <div style={{height:300}}>
        <SecondGraphic response={response} />
      </div>

      <HomeButton />
    </div>
  );
}
