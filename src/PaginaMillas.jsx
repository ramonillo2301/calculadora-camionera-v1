// src/PaginaMillas.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PaginaMillas = () => {
  const [millas, setMillas] = useState('');
  const [galones, setGalones] = useState('');
  const [litros, setLitros] = useState('');

  const convertir = () => {
    const litrosConvertidos = galones * 3.78541;
    setLitros(litrosConvertidos.toFixed(2));
  };

  return (
    <div className="form-container">
      <h2>Conversor de Millas y Galones</h2>

      <input
        type="number"
        placeholder="Millas"
        value={millas}
        onChange={(e) => setMillas(e.target.value)}
      />

      <input
        type="number"
        placeholder="Galones"
        value={galones}
        onChange={(e) => setGalones(e.target.value)}
      />

      <button onClick={convertir}>Convertir a Litros</button>

      {litros && <p>Litros: {litros}</p>}

      <br />
      <Link to="/">← Volver al formulario general</Link>
    </div>
  );
};

export default PaginaMillas;
