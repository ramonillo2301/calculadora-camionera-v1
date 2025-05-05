import React, { useState } from 'react';

const Horas = () => {
  const [distancia3, setDistancia3] = useState('');
  const [velocidad3, setVelocidad3] = useState('');
  const [resultado3, setResultado3] = useState('');

  const calcularHoras = () => {
    const d = parseFloat(distancia3);
    const v = parseFloat(velocidad3);
    if (!isNaN(d) && !isNaN(v) && v !== 0) {
      setResultado3(`Duración estimada: ${(d / v).toFixed(2)} horas.`);
    } else {
      setResultado3("Completa ambos campos correctamente.");
    }
  };

  const limpiarHoras = () => {
    setDistancia3('');
    setVelocidad3('');
    setResultado3('');
  };

  return (
    <div className="section">
      <h2>Horas de manejo</h2>
      <input type="number" value={distancia3} onChange={e => setDistancia3(e.target.value)} placeholder="Distancia (km)" />
      <input type="number" value={velocidad3} onChange={e => setVelocidad3(e.target.value)} placeholder="Velocidad promedio (km/h)" />
      <div className="buttons">
        <button className="general-button" onClick={calcularHoras}>Calcular</button>
        <button className="general-button" onClick={limpiarHoras}>Limpiar</button>
      </div>
      <p>{resultado3}</p>
    </div>
  );
};

export default Horas;
