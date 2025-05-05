import React, { useState } from 'react';

const KmMillas = () => {
  const [cantidad, setCantidad] = useState('');
  const [resultado, setResultado] = useState('');
  const [tipoConversion, setTipoConversion] = useState('km-millas');

  const handleConversion = () => {
    let result;
    if (tipoConversion === 'km-millas') {
      result = cantidad * 0.621371;
    } else {
      result = cantidad / 0.621371;
    }
    setResultado(result.toFixed(2));
  };

  return (
    <div className="px-6 sm:px-8 md:px-10 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-white text-center">
        {tipoConversion === 'km-millas' ? 'Kilómetros a Millas' : 'Millas a Kilómetros'}
      </h2>

      <select
        value={tipoConversion}
        onChange={(e) => setTipoConversion(e.target.value)}
        className="w-full mb-3 p-2 rounded border border-gray-400 bg-gray-900 text-white"
      >
        <option value="km-millas">Kilómetros a Millas</option>
        <option value="millas-km">Millas a Kilómetros</option>
      </select>

      <input
        type="number"
        placeholder={tipoConversion === 'km-millas' ? 'Kilómetros' : 'Millas'}
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
          Resultado: {resultado} {tipoConversion === 'km-millas' ? 'Millas' : 'Kilómetros'}
        </p>
      )}
    </div>
  );
};

export default KmMillas;
