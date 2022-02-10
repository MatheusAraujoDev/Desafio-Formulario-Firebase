import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function ComingBackButton({ text }) {
  return (
    <>
      <Link style={ { textDecoration: 'none' } } to={ text }>
      <Button
        color='primary'
        style={ { alignItems: 'center' } }
      >
        Voltar
      </Button>
    </Link>
    </>
  );
}
