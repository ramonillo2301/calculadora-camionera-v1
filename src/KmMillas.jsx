import React, { useState, useRef } from 'react';

const KmMillas = () => {
  const [cantidad, setCantidad] = useState('');
  const [resultado, setResultado] = useState('');
  const [tipoConversion, setTipoConversion] = useState('km-millas');
  const [error, setError] = useState('');
  const inputRef = useRef(null);

  const handleConversion = () => {
    const valor = parseFloat(cantidad);
    if (isNaN(valor) || valor <= 0) {
      setError('Por favor ingresa un número válido mayor que cero.');
      setResultado('');
      return;
    }

    setError('');
    const factor = 0.621371;
    const result = tipoConversion === 'km-millas' 
      ? valor * factor 
      : valor / factor;

    setResultado(result.toFixed(2));
  };

  const handleClear = () => {
    setCantidad('');
    setResultado('');
    setError('');
    inputRef.current?.focus();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-200 dark:bg-green-700 text-green-900 dark:text-white p-3 rounded shadow-md animate-fade-in">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
          {tipoConversion === 'km-millas' ? 'Kilómetros a Millas' : 'Millas a Kilómetros'}
        </h2>

        <select
          value={tipoConversion}
          onChange={(e) => setTipoConversion(e.target.value)}
          className="w-full mb-3 p-2 rounded border border-gray-300 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
        >
          <option value="km-millas">Kilómetros a Millas</option>
          <option value="millas-km">Millas a Kilómetros</option>
        </select>

        <input
          ref={inputRef}
          type="number"
          placeholder={tipoConversion === 'km-millas' ? 'Kilómetros' : 'Millas'}
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          className="w-full mb-3 p-2 rounded border border-gray-300 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500"
        />

        {error && (
          <p className="text-red-600 dark:text-red-400 text-sm font-semibold mb-3 text-center">
            {error}
          </p>
        )}

        <div className="flex gap-3 mb-4">
          <button
            onClick={handleConversion}
            className="general-button w-1/2 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold transition"
          >
            Convertir
          </button>

          <button
            onClick={handleClear}
            className="general-button w-1/2 p-2 bg-gray-500 hover:bg-gray-600 text-white rounded font-semibold transition"
          >
            Limpiar
          </button>
        </div>

        {resultado && (
          <div className="bg-green-100 dark:bg-green-700 text-green-800 dark:text-white p-3 rounded shadow-md animate-fade-in">
            <p className="mt-4 text-xl font-bold text-center text-green-900 dark:text-green-300">
              Resultado: {resultado} {tipoConversion === 'km-millas' ? 'Millas' : 'Kilómetros'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default KmMillas;
