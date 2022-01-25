import React from 'react';

export default function Questions() {
  return (
    <>
      <h2>Quantas pessoas tem sua equipe? </h2>
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

        <div>
          <h2>Qual sua satisfação com a Empresa?</h2>
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
    </>
  );
}
