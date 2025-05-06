import React from 'react';
import './ThemeToggle.css';

function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <div className="toggle-wrapper" onClick={toggleTheme}>
      <div className={`toggle-track ${darkMode ? 'dark' : 'light'}`}>
        <div className="toggle-thumb" />
      </div>
      <span className="toggle-label">
        {darkMode ? 'Modo Claro ☀️' : 'Modo Oscuro 🌙'}
      </span>
    </div>
  );
}

export default ThemeToggle;