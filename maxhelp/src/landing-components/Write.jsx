import React from "react";
import "../Write.css";

const Write = () => {
  return (
    <div className="write-section">
      <div className="badge">Index 1.0 · Public Beta</div>
      <h1 className="hero-title">
        MaxHelp Data to <span className="highlight">Intelligent insights</span> 
      </h1>
      <p className="hero-subtitle">
        MaxHelp Management  dashboard, bringing the team together.
      </p>
      <button className="cta-button">Get started</button>
      <div className="animated-lines">
        {[...Array(20)].map((_, index) => (
          <span key={index} className="line"></span>
        ))}
      </div>
    </div>
  );
};

export default Write;
