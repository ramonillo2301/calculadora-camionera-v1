import React, { useState } from 'react';

const Peso = () => {
  const [peso5, setPeso5] = useState('');
  const [maximo5, setMaximo5] = useState('');
  const [resultado5, setResultado5] = useState('');

  const verificarPeso = () => {
    const p = parseFloat(peso5);
    const m = parseFloat(maximo5);
    if (!isNaN(p) && !isNaN(m)) {
      setResultado5(p > m ? "¡Carga demasiado pesada!" : "Peso dentro del límite.");
    } else {
      setResultado5("Completa ambos campos correctamente.");
    }
  };

  const limpiarPeso = () => {
    setPeso5('');
    setMaximo5('');
    setResultado5('');
  };

  return (
    <div className="section">
      <h2>Verificación de peso</h2>
      <input type="number" value={peso5} onChange={e => setPeso5(e.target.value)} placeholder="Peso carga (kg)" />
      <input type="number" value={maximo5} onChange={e => setMaximo5(e.target.value)} placeholder="Peso máximo permitido (kg)" />
      <div className="buttons">
        <button className="general-button" onClick={verificarPeso}>Calcular</button>
        <button className="general-button" onClick={limpiarPeso}>Limpiar</button>
      </div>
      <p>{resultado5}</p>
    </div>
  );
};

export default Peso;
