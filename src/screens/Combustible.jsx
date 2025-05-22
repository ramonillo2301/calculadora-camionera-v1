import React, { useState } from 'react';

const Combustible = () => {
  const [nivelActual, setNivelActual] = useState('');
  const [nivelMaximo, setNivelMaximo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const calcularNivel = () => {
    const actual = parseFloat(nivelActual);
    const max = parseFloat(nivelMaximo);

    if (isNaN(actual) || isNaN(max) || actual < 0 || max <= 0) {
      setError('Por favor, ingresa valores válidos.');
      setMensaje('');
      return;
    }

    const porcentaje = (actual / max) * 100;

    if (porcentaje < 25) {
      setMensaje(`⚠️ Advertencia: solo queda el ${porcentaje.toFixed(1)}% de combustible.`);
    } else {
      setMensaje(`✅ Nivel adecuado: tienes el ${porcentaje.toFixed(1)}% del tanque.`);
    }

    setError('');
  };

  const limpiar = () => {
    setNivelActual('');
    setNivelMaximo('');
    setMensaje('');
    setError('');
  };

  return (
    <div className="bg-black bg-opacity-35 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white border-opacity-10 text-white max-w-md mx-auto my-4">
      <h2 className="text-xl font-bold mb-4 text-center">Revisión de Combustible</h2>

      <input
        type="number"
        value={nivelActual}
        onChange={e => setNivelActual(e.target.value)}
        placeholder="Nivel actual (gal)"
        className="w-full mb-3 p-2 rounded-md bg-gray-900 bg-opacity-40 border border-white border-opacity-20 focus:outline-none focus:ring-2"
      />

      <input
        type="number"
        value={nivelMaximo}
        onChange={e => setNivelMaximo(e.target.value)}
        placeholder="Tanque máximo (gal)"
        className="w-full mb-3 p-2 rounded-md bg-gray-900 bg-opacity-40 border border-white border-opacity-20 focus:outline-none focus:ring-2"
      />

      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

      <div className="flex justify-between gap-4">
        <button
          onClick={calcularNivel}
          className="general-button bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full"
        >
          Calcular
        </button>
        <button
          onClick={limpiar}
          className="general-button bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 w-full"
        >
          Limpiar
        </button>
      </div>

      {mensaje && <p className="mt-4 text-center">{mensaje}</p>}
    </div>
  );
};

export default Combustible;
