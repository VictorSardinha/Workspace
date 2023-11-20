import React from 'react';
import interestelarImage from './img/interestelar.png';

const Principal = () => {
  return (
    <div style={{ textAlign: 'center', backgroundColor: 'orange', padding: '20px' }}>
      <p style={{ fontSize: '2rem', color: 'purple' }}>
        Estou participando do curso de IOS com o objetivo de adquirir conhecimentos fundamentais na área de desenvolvimento front-end. Meu intuito é aprender a colaborar eficientemente em projetos de equipe, aprimorar minhas habilidades de comunicação e, a longo prazo, evoluir como desenvolvedor.
      </p>
      <ol>
        <li>Interestelar</li>
        <li>A Origem</li>
        <li>Coringa</li>
        <li>Jack Reacher</li>
        <li>Círculo de Fogo</li>
      </ol>
      <img src={interestelarImage} alt="Interestelar" />
    </div>
  );
};

export default Principal;
