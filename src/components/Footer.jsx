import React from 'react';

export default function Footer() {
  return (
    <footer>
      Projeto desenvolvido por:
        <a
          style={ { textDecoration: 'none ', color: 'purple', marginLeft: '5px' } }
          href='https://github.com/MatheusAraujoDev'
        >
          Matheus Araújo
        </a>
    </footer>
  );
}
