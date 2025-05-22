import React, { useState, useEffect } from 'react';
import '../styles/SplashScreen.css';
import Loader from '../components/Loader';

const SplashScreen = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Después de 1.5 segundos, mostramos el loader
    const loaderTimer = setTimeout(() => {
      setShowLoader(true);
    }, 1500);

    // Después de 4 segundos, comenzamos a hacer fade out
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4000);

    // Después de 4.5 segundos, indicamos que terminó el splash
    const finishTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 4500);

    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className={`splash-container ${fadeOut ? 'fade-out' : ''}`}>
      <img
        src="/logo.png"
        alt="ArenasTransport Logo"
        className="logo"
      />
      <h1 className="title">ArenasTransport.</h1>
      {showLoader && <Loader />}
    </div>
  );
};

export default SplashScreen;
