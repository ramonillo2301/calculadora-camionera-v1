import React, { useState } from 'react';

const Combustible = () => {
  const [distancia2, setDistancia2] = useState('');
  const [rendimiento2, setRendimiento2] = useState('');
  const [resultado2, setResultado2] = useState('');
  const [tipoRendimiento, setTipoRendimiento] = useState('km-galon');

  const calcularCombustible = () => {
    const d = parseFloat(distancia2);
    const r = parseFloat(rendimiento2);

    const factor = tipoRendimiento === 'km-galon' ? 1 : 1.60934; // convierte millas a km
    const rendimientoConvertido = r * factor;

    if (!isNaN(d) && !isNaN(r) && rendimientoConvertido !== 0) {
      const resultado = d / rendimientoConvertido;
      setResultado2(`Necesitas ${resultado.toFixed(2)} galones.`);
    } else {
      setResultado2("Completa ambos campos correctamente.");
    }
  };

  const limpiarCombustible = () => {
    setDistancia2('');
    setRendimiento2('');
    setResultado2('');
  };

  return (
    <div className="section p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Combustible necesario</h2>

      <div className="mb-4">
        <select
          value={tipoRendimiento}
          onChange={e => setTipoRendimiento(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="km-galon">Kilómetros por galón</option>
          <option value="millas-galon">Millas por galón</option>
        </select>
      </div>

      <div className="mb-4">
        <input 
          type="number" 
          value={distancia2} 
          onChange={e => setDistancia2(e.target.value)} 
          placeholder={tipoRendimiento === 'km-galon' ? 'Distancia (km)' : 'Distancia (millas)'}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <input 
          type="number" 
          value={rendimiento2} 
          onChange={e => setRendimiento2(e.target.value)} 
          placeholder={tipoRendimiento === 'km-galon' ? 'Rendimiento (km/galón)' : 'Rendimiento (millas/galón)'}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-between gap-4">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" 
          onClick={calcularCombustible}
        >
          Calcular
        </button>
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" 
          onClick={limpiarCombustible}
        >
          Limpiar
        </button>
      </div>

      {resultado2 && <p className="mt-4 text-center text-gray-700">{resultado2}</p>}
    </div>
  );
};

export default Combustible;
