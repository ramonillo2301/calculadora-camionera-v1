import React, { useState } from 'react';

const Pago = () => {
  const [unidad, setUnidad] = useState('km');
  const [moneda, setMoneda] = useState('USD');
  const [distancia4, setDistancia4] = useState('');
  const [tarifa4, setTarifa4] = useState('');
  const [resultado4, setResultado4] = useState('');

  const obtenerSimboloMoneda = (moneda) => {
    switch (moneda) {
      case 'USD': return '$';
      case 'EUR': return '€';
      case 'MXN': return 'MX$';
      case 'COP': return 'COL$';
      case 'CLP': return 'CLP$';
      default: return '';
    }
  };

  const calcularPago = () => {
    const d = parseFloat(distancia4);
    const t = parseFloat(tarifa4);
    if (!isNaN(d) && !isNaN(t)) {
      const simbolo = obtenerSimboloMoneda(moneda);
      setResultado4(`Pago estimado: ${simbolo}${(d * t).toFixed(2)}`);
    } else {
      setResultado4("Completa ambos campos correctamente.");
    }
  };

  const limpiarPago = () => {
    setDistancia4('');
    setTarifa4('');
    setResultado4('');
  };

  const simbolo = obtenerSimboloMoneda(moneda);

  return (
    <div className="bg-black bg-opacity-30 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white border-opacity-10 text-white max-w-md mx-auto my-4">
      <h2 className="text-xl font-bold text-center text-white-400 mb-4">Pago estimado</h2>

      <div className="flex gap-3 mb-3">
        <select
          value={unidad}
          onChange={(e) => setUnidad(e.target.value)}
          className="w-1/2 p-2 rounded-md bg-gray-900 bg-opacity-40 border border-white border-opacity-20 text-white"
        >
          <option value="km">Kilómetros</option>
          <option value="mi">Millas</option>
        </select>

        <select
          value={moneda}
          onChange={(e) => setMoneda(e.target.value)}
          className="w-1/2 p-2 rounded-md bg-gray-900 bg-opacity-40 border border-white border-opacity-20 text-white"
        >
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
          <option value="MXN">MXN (MX$)</option>
          <option value="COP">COP (COL$)</option>
          <option value="CLP">CLP (CLP$)</option>
        </select>
      </div>

      <input
        type="number"
        value={distancia4}
        onChange={e => setDistancia4(e.target.value)}
        placeholder={`Distancia (${unidad})`}
        className="w-full mb-3 p-2 rounded-md bg-gray-900 bg-opacity-40 border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="number"
        value={tarifa4}
        onChange={e => setTarifa4(e.target.value)}
        placeholder={`Tarifa por ${unidad} (${simbolo})`}
        className="w-full mb-3 p-2 rounded-md bg-gray-900 bg-opacity-40 border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <button
          className="general-button bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow"
          onClick={calcularPago}
        >
          Calcular
        </button>
        <button
          className="general-button bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow"
          onClick={limpiarPago}
        >
          Limpiar
        </button>
      </div>

      {resultado4 && <p className="mt-4 text-center">{resultado4}</p>}
    </div>
  );
};

export default Pago;
