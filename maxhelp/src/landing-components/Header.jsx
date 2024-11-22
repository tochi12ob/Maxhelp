import React from 'react';
import '../Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Management Dashboard</h1>
      <div className="menu">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#blog">Blog</a>
      </div>
    </header>
  );
};

export default Header;
