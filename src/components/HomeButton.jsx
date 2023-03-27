import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';

export default function HomeButton() {
  return (
    <Link style={ { textDecoration: 'none' } } to='/'>
      <Button
        color='primary'
        variant='outlined'
        name="Home"
        startIcon={ <HomeSharpIcon /> }
        style={ { alignItems: 'center' } }
      >
        Home
      </Button>
    </Link>
  );
}
