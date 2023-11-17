import React from "react";

let estilo = {listStyle: 'none', color: 'blue', fontSize: '67px', textAlign: 'center'}


const Exemplo = () => {
  return (
    <>
      <h1>Sexta-feira depressiva</h1>
      <p>Metade vai repravar</p>
      <ul style={estilo}>
        <li>Maria Eduarda</li>
        <li>Anna Lima</li>
        <li>Victor Sardinha</li>
        <li>O restante da sala</li>
      </ul>
    </>
  );
};

export default Exemplo;
