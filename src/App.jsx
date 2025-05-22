import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/App.css';
import ThemeToggle from './components/ThemeToggle';
import SplashScreen from './screens/SplashScreen';
import { UnitProvider } from './context/UnitContext';
import Layout from './layouts/Layout';
import AppMain from './screens/AppMain';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showToggle, setShowToggle] = useState(true);
  const [loading, setLoading] = useState(true);
  const [fadeOutSplash, setFadeOutSplash] = useState(false);
  const [autoTheme, setAutoTheme] = useState(true);

  // SplashScreen timers
  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOutSplash(true), 4500);
    const timer2 = setTimeout(() => setLoading(false), 5000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Dark mode preferences
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedMode = localStorage.getItem('darkMode');
    setDarkMode(savedMode ? JSON.parse(savedMode) : prefersDark);
  }, []);

useEffect(() => {
  console.log('Dark mode updated:', darkMode);
  document.documentElement.classList.toggle('dark', darkMode);
  localStorage.setItem('darkMode', JSON.stringify(darkMode));
}, [darkMode]);

  // ThemeToggle visibility control
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

  const toggleTheme = () => {
    if (autoTheme)
        setAutoTheme(false);
        setDarkMode(prev => {
            console.log('Toggle pressed, previous:', prev, 'new:', !prev);
            return !prev;
  });
};

  useEffect(() => {
    if (!autoTheme) return;

    const updateThemeBasedOnTime = () => {
    const hour = new Date().getHours();
    const themeSettings = {
        dayStart: 6,
        nightStart: 18 };
      const isDayTime = hour >= themeSettings.dayStart && hour < themeSettings.nightStart;
      setDarkMode(!isDayTime);
};


    updateThemeBasedOnTime(); // Ejecutar al cargar

    const interval = setInterval(updateThemeBasedOnTime, 60000); // cada minuto

    return () => clearInterval(interval);
  }, [autoTheme]);

  if (loading) {
    return <SplashScreen fadeOut={fadeOutSplash} />
  }

  return (
    <Router>
      <UnitProvider>
        <div className="relative min-h-screen w-full">
        <div className={`absolute inset-0 -z-10 transition-all duration-500 ease-in-out bg-gradient-light dark:bg-gradient-dark`} />

          {showToggle && (
            <div className="fixed top-4 right-4 z-50">
              <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
            </div>
          )}
          <Layout>
            <AppMain />
            
          </Layout>
        </div>
      </UnitProvider>
    </Router>
  );
}

export default App;
