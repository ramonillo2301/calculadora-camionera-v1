import React, { useState } from 'react';

const Peso = () => {
  const [distancia, setDistancia] = useState('');
  const [pesoPorUnidad, setPesoPorUnidad] = useState('');
  const [unidadPeso, setUnidadPeso] = useState('kg');
  const [resultado, setResultado] = useState('');

  const calcularPeso = () => {
    const d = parseFloat(distancia); // Convertir la distancia a número
    const p = parseFloat(pesoPorUnidad); // Convertir el peso por unidad a número

    // Verificar si ambas entradas son números válidos
    if (isNaN(d) || isNaN(p)) {
      setResultado("Completa ambos campos correctamente.");
      return; // Detener la ejecución si hay un error en las entradas
    }

    // Realizar el cálculo del peso total
    const total = d * p;

    // Convertir el resultado dependiendo de la unidad seleccionada
    const resultadoFinal = unidadPeso === 'kg'
      ? `${total.toFixed(2)} kg` // Si la unidad es 'kg', mostramos en kilogramos
      : `${(total * 2.20462).toFixed(2)} lb`; // Si la unidad es 'lb', convertimos a libras

    // Mostrar el resultado
    setResultado(`Peso total estimado: ${resultadoFinal}`);
  };

  const limpiarCampos = () => {
    setDistancia('');
    setPesoPorUnidad('');
    setResultado('');
  };

  return (
    <div className="modo-claro-texto bg-black bg-opacity-30 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white border-opacity-10 text-white max-w-md mx-auto my-4">
      <h2 className="modo-claro-texto text-xl font-bold text-center dark:text-white-400 mb-4">Peso total estimado</h2>
      
      <div className="mb-3">
        <label className="block mb-1">Unidad de resultado</label>
        <select
          value={unidadPeso}
          onChange={e => setUnidadPeso(e.target.value)}
          className="w-full p-2 rounded-md bg-gray-900 bg-opacity-40 border border-white border-opacity-20 text-white focus:outline-none"
        >
          <option value="kg">Kilogramos (kg)</option>
          <option value="lb">Libras (lb)</option>
        </select>
      </div>

      {/* Ajustar los campos según la unidad seleccionada */}
      {unidadPeso === 'kg' ? (
        <>
          <input
            type="number"
            value={distancia}
            onChange={e => setDistancia(e.target.value)}
            placeholder="Distancia (km)"
            className="w-full mb-3 p-2 rounded-md bg-gray-900 bg-opacity-40 border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="number"
            value={pesoPorUnidad}
            onChange={e => setPesoPorUnidad(e.target.value)}
            placeholder="Peso por km (kg/km)"
            className="w-full mb-3 p-2 rounded-md bg-gray-900 bg-opacity-40 border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </>
      ) : (
        <>
          <input
            type="number"
            value={distancia}
            onChange={e => setDistancia(e.target.value)}
            placeholder="Distancia (mi)"
            className="w-full mb-3 p-2 rounded-md bg-gray-900 bg-opacity-40 border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="number"
            value={pesoPorUnidad}
            onChange={e => setPesoPorUnidad(e.target.value)}
            placeholder="Peso por mi (lb/mi)"
            className="w-full mb-3 p-2 rounded-md bg-gray-900 bg-opacity-40 border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </>
      )}

      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <button
          className="general-button bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg shadow"
          onClick={calcularPeso}
        >
          Calcular
        </button>
        <button
          className="general-button bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg shadow"
          onClick={limpiarCampos}
        >
          Limpiar
        </button>
      </div>

      {resultado && <p className="mt-4 text-center">{resultado}</p>}
    </div>
  );
};

export default Peso;
