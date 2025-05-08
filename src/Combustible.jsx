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
    <div className="section p-6 rounded-2xl shadow-2xl bg-white max-w-md mx-auto border border-gray-200 dark:bg-gray-900 dark:text-white">
      <h2 className="text-xl font-bold mb-4 text-center">Revisión de Combustible</h2>

      <input
        type="number"
        value={nivelActual}
        onChange={e => setNivelActual(e.target.value)}
        placeholder="Nivel actual (gal)"
        className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="number"
        value={nivelMaximo}
        onChange={e => setNivelMaximo(e.target.value)}
        placeholder="Tanque máximo (gal)"
        className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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
