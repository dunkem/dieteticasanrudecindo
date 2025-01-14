import React from 'react';
import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Products />
        <Services />
        <Contact />
      </main>
      <Footer />
      <a
        href="https://wa.me/1123423423"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
};

export default App;
