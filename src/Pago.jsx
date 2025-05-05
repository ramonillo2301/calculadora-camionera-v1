import React, { useState } from 'react';

const Pago = () => {
  const [distancia4, setDistancia4] = useState('');
  const [tarifa4, setTarifa4] = useState('');
  const [resultado4, setResultado4] = useState('');

  const calcularPago = () => {
    const d = parseFloat(distancia4);
    const t = parseFloat(tarifa4);
    if (!isNaN(d) && !isNaN(t)) {
      setResultado4(`Pago estimado: $${(d * t).toFixed(2)}`);
    } else {
      setResultado4("Completa ambos campos correctamente.");
    }
  };

  const limpiarPago = () => {
    setDistancia4('');
    setTarifa4('');
    setResultado4('');
  };

  return (
    <div className="section">
      <h2>Pago por viaje</h2>
      <input type="number" value={distancia4} onChange={e => setDistancia4(e.target.value)} placeholder="Distancia (km)" />
      <input type="number" value={tarifa4} onChange={e => setTarifa4(e.target.value)} placeholder="Tarifa ($/km)" />
      <div className="buttons">
        <button className="general-button" onClick={calcularPago}>Calcular</button>
        <button className="general-button" onClick={limpiarPago}>Limpiar</button>
      </div>
      <p>{resultado4}</p>
    </div>
  );
};

export default Pago;
