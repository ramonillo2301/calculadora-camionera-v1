/** @type {import('tailwindcss').Config} */
export default {
 // tailwind.config.js

 


  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  darkMode: 'class', // ¡Clave!
  theme: {
    extend: {
      boxShadow: {
        'xxl': '0 4px 8px rgba(0, 0, 0, 0.80)',
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(to bottom right, #ffffff, #f0f0f0)',
        'gradient-dark': 'linear-gradient(to bottom right, #1a1a1a, #000000)',
      },
    },
  },

  plugins: [],
}
