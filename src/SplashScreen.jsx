import React from 'react';
import './SplashScreen.css';
import Loader from './Loader'; 

const SplashScreen = ({ fadeOut }) => {
  return (
    <div className={`splash-container ${fadeOut ? 'fade-out' : ''}`}>
      <img
        src="/favicon.png"
        alt="ArenasTransport Logo"
        className="logo"
      />
      <h1 className="title">ArenasTransport.</h1>
    </div>
  );
};

export default SplashScreen;
