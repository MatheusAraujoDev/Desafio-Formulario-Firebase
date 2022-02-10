import React from 'react';

export default function SecondQuestionInput({ inputValue, state, value }) {
  return (
    <label style={{ display: 'flex', flexDirection:'row' }}>
      <input
        type="radio"
        onClick={ state }
        data-testid='satisfaction'
        name='satisfaction'
        value={ inputValue }
      />
    { value }
    </label>
  );
}
