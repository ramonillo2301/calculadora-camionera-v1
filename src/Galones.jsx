import React, { useState } from 'react';
import { useUnidad } from './UnitContext'; // Asegúrate de que la ruta es correcta

const Galones = () => {
  const { unidad, setUnidad } = useUnidad(); // Accede al contexto
  const [distancia1, setDistancia1] = useState('');
  const [rendimiento1, setRendimiento1] = useState('');
  const [resultado1, setResultado1] = useState('');

  const calcularGalones = () => {
    const d = parseFloat(distancia1);
    const r = parseFloat(rendimiento1);

    // Convertir la distancia a kilómetros si la unidad seleccionada es millas
    const distanciaEnKm = unidad === 'millas' ? d * 1.60934 : d; // 1 milla = 1.60934 km

    if (!isNaN(distanciaEnKm) && !isNaN(r) && r !== 0) {
      setResultado1(`Necesitas ${(distanciaEnKm / r).toFixed(2)} galones.`);
    } else {
      setResultado1("Completa ambos campos correctamente.");
    }
  };

  const limpiarGalones = () => {
    setDistancia1('');
    setRendimiento1('');
    setResultado1('');
  };

  return (
    <div className="section p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Galones necesarios</h2>

      {/* Selector de unidad (km o millas) */}
      <div className="mb-4">
        <select 
          value={unidad} 
          onChange={e => setUnidad(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="km">Kilómetros</option>
          <option value="millas">Millas</option>
        </select>
      </div>

      {/* Campo para ingresar la distancia */}
      <div className="mb-4">
        <input 
          type="number" 
          value={distancia1} 
          onChange={e => setDistancia1(e.target.value)} 
          placeholder={`Distancia (${unidad === 'km' ? 'km' : 'millas'})`}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Campo para ingresar el rendimiento */}
      <div className="mb-4">
        <input 
          type="number" 
          value={rendimiento1} 
          onChange={e => setRendimiento1(e.target.value)} 
          placeholder={`${unidad === 'km' ? 'Km/galón' : 'Millas/galón'}`}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Botones de calcular y limpiar */}
      <div className="flex justify-between gap-4">
        <button 
          className="general-button bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" 
          onClick={calcularGalones}
        >
          Calcular
        </button>
        <button 
          className="general-button bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" 
          onClick={limpiarGalones}
        >
          Limpiar
        </button>
      </div>

      {/* Mostrar el resultado */}
      {resultado1 && <p className="mt-4 text-center text-gray-700">{resultado1}</p>}
    </div>
  );
};

export default Galones;
