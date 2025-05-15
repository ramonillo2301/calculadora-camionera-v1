import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
                <p className="loader-text">Cargando ArenasTransport...</p>
        </div>
    );
};


export default Loader;