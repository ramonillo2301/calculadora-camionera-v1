import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home as HomeIcon, Calculator, RulerDimensionLine, Droplet, GaugeCircle, Clock, CreditCard, Scale } from 'lucide-react';

export default function Layout({ children }) {
  const location = useLocation();
  const hideBottomNavOn = ['/', '/contacto'];
  const hideNav = hideBottomNavOn.includes(location.pathname);

  return (
    <div className="app-container">
 {/* 👈 Flex vertical y altura pantalla completa */}
      
      {/* Navbar superior */}
      <header className="p-4 bg-background">
        <nav className="flex flex-col gap-2">
          <NavLink to="/" className="nav-link text-lg font-semibold flex items-center gap-2">
            <HomeIcon className="w-6 h-6" /> Inicio
          </NavLink>
          <NavLink to="/contacto" className="nav-link flex items-center gap-2" end>
            📞 Contacto
          </NavLink>
          <NavLink to="/galones" className="nav-link flex items-center gap-1" end>
            <Calculator className="w-6 h-6" /> Calculadora Online
          </NavLink>
        </nav>
      </header>

      {/* Contenido principal */}
      <main className="flex-1 p-4"> {/* 👈 Esto rellena el espacio restante */}
        {children}
      </main>

      {/* Navbar inferior */}
      {!hideNav && (
        <footer className="navbar sticky bottom-5 shadow-xxl z-40 flex flex-wrap justify-center gap-4 p-4 bg-background rounded-2xl">
          <NavLink to="/galones" className="nav-link flex items-center gap-1" end>
            <RulerDimensionLine className="w-5 h-5" /> Galones
          </NavLink>
          <NavLink to="/combustible" className="nav-link flex items-center gap-1" end>
            <Droplet className="w-5 h-5" /> Combustible
          </NavLink>
          <NavLink to="/horas" className="nav-link flex items-center gap-1" end>
            <Clock className="w-5 h-5" /> Horas
          </NavLink>
          <NavLink to="/pago" className="nav-link flex items-center gap-1" end>
            <CreditCard className="w-5 h-5" /> Pago
          </NavLink>
          <NavLink to="/peso" className="nav-link flex items-center gap-1" end>
            <Scale className="w-5 h-5" /> Peso
          </NavLink>
          <NavLink to="/galones-litros" className="nav-link flex items-center gap-1" end>
            <Droplet className="w-5 h-5" /> Volumen
          </NavLink>
          <NavLink to="/km-millas" className="nav-link flex items-center gap-1" end>
            <GaugeCircle className="w-5 h-5" /> Distancia
          </NavLink>
        </footer>
      )}
    </div>
  );
}

