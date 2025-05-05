import React, { useState } from 'react';

const Galones = () => {
  const [distancia1, setDistancia1] = useState('');
  const [rendimiento1, setRendimiento1] = useState('');
  const [resultado1, setResultado1] = useState('');

  const calcularGalones = () => {
    const d = parseFloat(distancia1);
    const r = parseFloat(rendimiento1);
    if (!isNaN(d) && !isNaN(r) && r !== 0) {
      setResultado1(`Necesitas ${(d / r).toFixed(2)} galones.`);
    } else {
      setResultado1("Completa ambos campos correctamente.");
    }
  };

  const limpiarGalones = () => {
    setDistancia1('');
    setRendimiento1('');
    setResultado1('');
  };

  return (
    <div className="section">
      <h2>Galones necesarios</h2>
      <input type="number" value={distancia1} onChange={e => setDistancia1(e.target.value)} placeholder="Distancia (km)" />
      <input type="number" value={rendimiento1} onChange={e => setRendimiento1(e.target.value)} placeholder="Rendimiento (km/galón)" className='w-full mb-3 p-2 rounded border border-gray-400 bg-gray-900 text-white'/>
      <div className="buttons">
        <button className="general-button" onClick={calcularGalones}>Calcular</button>
        <button className="general-button" onClick={limpiarGalones}>Limpiar</button>
      </div>
      <p>{resultado1}</p>
    </div>
  );
};

export default Galones;
