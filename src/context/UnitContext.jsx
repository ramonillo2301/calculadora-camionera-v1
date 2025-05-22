import React, { createContext, useContext, useState } from 'react';

// Crea y exporta el contexto
const UnitContext = createContext();

// Componente Provider para envolver tu aplicación
export const UnitProvider = ({ children }) => {
  const [unidad, setUnidad] = useState('km'); // Valor inicial

  return (
    <UnitContext.Provider value={{ unidad, setUnidad }}>
      {children}
    </UnitContext.Provider>
  );
};

// Hook para consumir el contexto
export const useUnidad = () => useContext(UnitContext);
