import React from 'react';

const Rodape = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer style={{ textAlign: 'center', padding: '20px' }}>
      Victor Alexandre Miquelino Sardinha &copy; {anoAtual}
    </footer>
  );
};

export default Rodape;
