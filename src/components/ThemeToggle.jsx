import React from 'react';

function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 p-2 rounded-full border border-primary dark:border-accent transition-colors duration-300"
    >
      <div
        className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors duration-300 ${
          darkMode ? 'bg-accent' : 'bg-primary'
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
            darkMode ? 'translate-x-5' : ''
          }`}
        ></div>
      </div>
      <span className="text-secondary dark:text-accent font-medium">
        {darkMode ? 'Modo Claro ☀️' : 'Modo Oscuro 🌙'}
      </span>
    </button>
  );
}

export default ThemeToggle;
