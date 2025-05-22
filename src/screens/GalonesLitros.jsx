import React, { useState } from 'react';

const GalonesLitros = () => {
  const [cantidad, setCantidad] = useState('');
  const [resultado, setResultado] = useState('');
  const [tipoConversion, setTipoConversion] = useState('galones-litros');
  const [error, setError] = useState('');

  const handleConversion = () => {
    if (!cantidad || isNaN(cantidad) || cantidad <= 0) {
      setError('Por favor ingresa un número válido mayor que cero.');
      setResultado('');
      return;
    }

    setError('');
    let result;
    if (tipoConversion === 'galones-litros') {
      result = cantidad * 3.78541;
    } else {
      result = cantidad / 3.78541;
    }
    setResultado(result.toFixed(2));
  };

  const handleClear = () => {
    setCantidad('');
    setResultado('');
    setError('');
  };

  return (
    <div className="bg-black bg-opacity-30 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white border-opacity-10 text-white max-w-md mx-auto my-4">
      <h2 className="text-xl font-semibold mb-4 text-white text-center">
        {tipoConversion === 'galones-litros' ? 'Galones a Litros' : 'Litros a Galones'}
      </h2>

      <select
        value={tipoConversion}
        onChange={(e) => setTipoConversion(e.target.value)}
        className="w-full mb-3 p-2 rounded-md bg-gray-900 bg-opacity-40 border border-white border-opacity-20 focus:outline-none focus:ring-2"
      >
        <option value="galones-litros">Galones a Litros</option>
        <option value="litros-galones">Litros a Galones</option>
      </select>

      <input
        type="number"
        placeholder={tipoConversion === 'galones-litros' ? 'Galones' : 'Litros'}
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
        className="w-full mb-3 p-2 rounded-md bg-gray-900 bg-opacity-40 border border-white border-opacity-20 focus:outline-none focus:ring-2"
      />

      {error && (
        <p className="text-red-500 font-bold text-center mb-3">{error}</p>
      )}

      <div className="flex gap-2 mb-3">
        <button
          onClick={handleConversion}
          className="general-button w-1/2 p-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded"
        >
          Convertir
        </button>

        <button
          onClick={handleClear}
          className="general-button w-1/2 p-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded"
        >
          Limpiar
        </button>
      </div>

      {resultado && (
        <p className="text-green-400 font-bold text-center">
          Resultado: {resultado} {tipoConversion === 'galones-litros' ? 'Litros' : 'Galones'}
        </p>
      )}
    </div>
  );
};

export default GalonesLitros;
