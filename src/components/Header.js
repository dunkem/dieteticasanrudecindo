import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <img 
          src="/logo.png" 
          alt="Logo Dietética San Rudecindo" 
          className="logo" 
        />
        <div className="nav-links">
          <a href="#products" className="nav-link">Productos</a>
          <a href="#services" className="nav-link">Servicios</a>
          <a href="#contact" className="nav-link">Contacto</a>
        </div>
      </nav>
      <section className="textos-header">
        <h1 className="header-title">Bienvenido a Dietética San Rudecindo</h1>
        <h2 className="header-subtitle">Calidad y Nutrición en cada Bocado</h2>
      </section>
      <div className="wave">
        {/* SVG wave can be added here */}
      </div>
    </header>
  );
};

export default Header;
