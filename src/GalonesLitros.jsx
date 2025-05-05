import React, { useState } from 'react';

const GalonesLitros = () => {
  const [cantidad, setCantidad] = useState('');
  const [resultado, setResultado] = useState('');
  const [tipoConversion, setTipoConversion] = useState('galones-litros');

  const handleConversion = () => {
    let result;
    if (tipoConversion === 'galones-litros') {
      result = cantidad * 3.78541;
    } else {
      result = cantidad / 3.78541;
    }
    setResultado(result.toFixed(2));
  };

  return (
    <div className="px-6 sm:px-8 md:px-10 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-white text-center">
        {tipoConversion === 'galones-litros' ? 'Galones a Litros' : 'Litros a Galones'}
      </h2>

      <select
        value={tipoConversion}
        onChange={(e) => setTipoConversion(e.target.value)}
        className="w-full mb-3 p-2 rounded border border-gray-400 bg-gray-900 text-white"
      >
        <option value="galones-litros">Galones a Litros</option>
        <option value="litros-galones">Litros a Galones</option>
      </select>

      <input
        type="number"
        placeholder={tipoConversion === 'galones-litros' ? 'Galones' : 'Litros'}
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
        className="w-full mb-3 p-2 rounded border border-gray-400 bg-gray-900 text-white placeholder-gray-400"
      />

      <button
        onClick={handleConversion}
        className="w-full p-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded mb-3"
      >
        Convertir
      </button>

      {resultado && (
        <p className="text-green-400 font-bold text-center">
          Resultado: {resultado} {tipoConversion === 'galones-litros' ? 'Litros' : 'Galones'}
        </p>
      )}
    </div>
  );
};

export default GalonesLitros;
