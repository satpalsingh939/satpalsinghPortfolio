import React from 'react'
export default function Navbar() {
  return (
    <header className="header">
      <div className="logo">SATPAL SINGH</div>
      <nav className="nav">
        <a href="#home" className="link">Home</a>
        <a href="#about" className="link">About</a>
        <a href="#services" className="link">Services</a>
        <a href="#projects" className="link">Projects</a>
        <a href="#contact" className="link">Contact</a>
      </nav>
    </header>
  );
}

