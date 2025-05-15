import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import SplashScreen  from './SplashScreen';


import Galones from './Galones';
import Combustible from './Combustible';
import Horas from './Horas';
import Pago from './Pago';
import Peso from './Peso';
import GalonesLitros from './GalonesLitros';
import KmMillas from './KmMillas';
import ThemeToggle from './ThemeToggle';
import { UnitProvider } from './UnitContext';

// Íconos válidos de lucide-react
import {
  Home,
  Droplet,
  GaugeCircle, // Para Distancia
  Clock,
  CreditCard,
  Scale,       // Para Peso
} from 'lucide-react';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showToggle, setShowToggle] = useState(true);
  const [loading, setLoading] = useState(true);
  const [fadeOutSplash, setFedeOutSplash] = useState(false);

  useEffect(() => {
    // Simular carga: cambia a false después de 3.5 segundos (puedes ajustar el tiempo)
    const timer1 = setTimeout(() => setFedeOutSplash(true), 3500); //Empieza fadeOut
    const timer2 = setTimeout(() => setLoading(false), 4000); //Quita el Splash
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
    
  }, []);

  // Detectar preferencia del sistema o modo guardado
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedMode = localStorage.getItem('darkMode');
    setDarkMode(savedMode ? JSON.parse(savedMode) : prefersDark);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Mostrar el botón flotante por 5 segundos al mover el mouse o tocar la pantalla
  useEffect(() => {
    let timeout = setTimeout(() => setShowToggle(false), 5000);
    const showAgain = () => {
      setShowToggle(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setShowToggle(false), 5000);
    };
    window.addEventListener('mousemove', showAgain);
    window.addEventListener('touchstart', showAgain);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('mousemove', showAgain);
      window.removeEventListener('touchstart', showAgain);
    };
  }, []);

  
  const toggleTheme = () => setDarkMode(prev => !prev);

  if (loading) {
    return <SplashScreen fadeOut={fadeOutSplash} />;
  }

  return (
    <UnitProvider>
      <div className="app-container">
        <Router>
          {/* Botón flotante de modo oscuro */}
          {showToggle && (
            <div className="fixed top-4 right-4 z-50">
              <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
            </div>
          )}

          {/* Navegación principal */}
          <nav className="navbar flex flex-wrap justify-center gap-4 p-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
            <NavLink to="/" className="nav-link flex items-center gap-1" end>
              <Home className="w-5 h-5" /> Galones
            </NavLink>
            <NavLink to="/combustible" className="nav-link flex items-center gap-1">
              <Droplet className="w-5 h-5" /> Combustible
            </NavLink>
            <NavLink to="/horas" className="nav-link flex items-center gap-1">
              <Clock className="w-5 h-5" /> Horas
            </NavLink>
            <NavLink to="/pago" className="nav-link flex items-center gap-1">
              <CreditCard className="w-5 h-5" /> Pago
            </NavLink>
            <NavLink to="/peso" className="nav-link flex items-center gap-1">
              <Scale className="w-5 h-5" /> Peso
            </NavLink>
            
            <NavLink to="/galones-litros" className="nav-link flex items-center gap-1">
              <Droplet className="w-5 h-5" /> Volumen
            </NavLink>
            <NavLink to="/km-millas" className="nav-link flex items-center gap-1">
              <GaugeCircle className="w-5 h-5" /> Distancia
            </NavLink>
          </nav>

          {/* Rutas */}
          <Routes>
            <Route path="/" element={<Galones />} />
            <Route path="/combustible" element={<Combustible />} />
            <Route path="/horas" element={<Horas />} />
            <Route path="/pago" element={<Pago />} />
            <Route path="/peso" element={<Peso />} />
            <Route path="/galones-litros" element={<GalonesLitros />} />
            <Route path="/km-millas" element={<KmMillas />} />
          </Routes>
        </Router>
      </div>
    </UnitProvider>
  );
}

export default App;
