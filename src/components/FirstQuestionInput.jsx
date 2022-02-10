import React from 'react';

export default function FirstQuestionInput({ inputValue, state, value }) {
  return (
    <label style={{ display: 'flex', flexDirection:'row' }}>
      <input
        type="radio"
        onClick={ state }
        data-testid='peopleAmount'
        name='peopleAmount'
        value={ inputValue }
      />
    { value }
    </label>
  );
}
