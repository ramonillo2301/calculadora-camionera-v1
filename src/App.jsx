import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';  // Asegúrate de tener este archivo

// Componentes (puedes agregar los tuyos aquí más tarde)
import Galones from './Galones';
import Combustible from './Combustible';
import Horas from './Horas';
import Pago from './Pago';
import Peso from './Peso';
import GalonesLitros from './GalonesLitros';
import KmMillas from './KmMillas';
import ThemeToggle from './ThemeToggle'; // Si tienes el componente ThemeToggle

import 'font-awesome/css/font-awesome.min.css';  // Si necesitas Font Awesome

function FormularioGeneral() {
  return (
    <div className="form-container">
      <Galones />
      <Combustible />
      <Horas />
      <Pago />
      <Peso />
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showToggle, setShowToggle] = useState(true);

  // Lógica para el modo oscuro
  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

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

  return (
    <Router>
      {/* Mostrar el toggle si se permite */}
      {showToggle && (
        <div className="theme-toggle-container">
          <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
            <span className="slider"></span>
            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </label>
        </div>
      )}

      <nav className="navbar">
        <NavLink to="/" className="nav-link" end>
          Formulario General
        </NavLink>
        <NavLink to="/galones-litros" className="nav-link">
          Galones a Litros
        </NavLink>
        <NavLink to="/km-millas" className="nav-link">
          Km a Millas
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<FormularioGeneral />} />
        <Route path="/galones-litros" element={<GalonesLitros />} />
        <Route path="/km-millas" element={<KmMillas />} />
      </Routes>
    </Router>
  );
}

export default App;
