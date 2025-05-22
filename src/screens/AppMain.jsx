// AppMain.jsx
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Contacto from './Contacto'
import Galones from './Galones';
import Combustible from './Combustible';
import Horas from './Horas';
import Pago from './Pago';
import Peso from './Peso';
import GalonesLitros from './GalonesLitros';
import KmMillas from './KmMillas';

function AppMain() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/galones" element={<Galones />} />
      <Route path="/combustible" element={<Combustible />} />
      <Route path="/horas" element={<Horas />} />
      <Route path="/pago" element={<Pago />} />
      <Route path="/peso" element={<Peso />} />
      <Route path="/galones-litros" element={<GalonesLitros />} />
      <Route path="/km-millas" element={<KmMillas />} />
    </Routes>
  );
}

export default AppMain;
