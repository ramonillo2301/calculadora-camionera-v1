import React, { useState } from 'react';

const Horas = () => {
  const [unidad, setUnidad] = useState('km'); // km o millas
  const [distancia3, setDistancia3] = useState('');
  const [velocidad3, setVelocidad3] = useState('');
  const [resultado3, setResultado3] = useState('');

  const calcularHoras = () => {
    const d = parseFloat(distancia3);
    const v = parseFloat(velocidad3);
    if (!isNaN(d) && !isNaN(v) && v !== 0) {
      setResultado3(`Duración estimada: ${(d / v).toFixed(2)} horas.`);
    } else {
      setResultado3("Completa ambos campos correctamente.");
    }
  };

  const limpiarHoras = () => {
    setDistancia3('');
    setVelocidad3('');
    setResultado3('');
  };

  return (
    <div className="bg-black bg-opacity-30 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white border-opacity-10 text-white max-w-md mx-auto my-4">
      <h2 className="text-xl font-bold text-center text-green-500 mb-4">Horas de manejo</h2>

      <select
        value={unidad}
        onChange={(e) => setUnidad(e.target.value)}
        className="w-full mb-3 p-2 rounded-md bg-gray-900 bg-opacity-40 border border-white border-opacity-20 text-white"
      >
        <option value="km">Kilómetros</option>
        <option value="mi">Millas</option>
      </select>

      <input
        type="number"
        value={distancia3}
        onChange={e => setDistancia3(e.target.value)}
        placeholder={`Distancia (${unidad})`}
        className="w-full mb-3 p-2 rounded-md bg-gray-900 bg-opacity-40 border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="number"
        value={velocidad3}
        onChange={e => setVelocidad3(e.target.value)}
        placeholder={`Velocidad promedio (${unidad}/h)`}
        className="w-full mb-3 p-2 rounded-md bg-gray-900 bg-opacity-40 border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow"
          onClick={calcularHoras}
        >
          Calcular
        </button>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow"
          onClick={limpiarHoras}
        >
          Limpiar
        </button>
      </div>

      {resultado3 && <p className="mt-4 text-center">{resultado3}</p>}
    </div>
  );
};

export default Horas;
