import React from 'react';
import '../Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Logo */}
          <div className="footer-logo">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={`logo-square ${i % 2 === 0 ? '' : 'rotated'}`}
              />
            ))}
          </div>

          {/* Brand Name */}
          <div className="brand-name">MAXHELP</div>

          {/* Navigation Links */}
          <div className="footer-nav">
            {/* About Us Section */}
            <div className="nav-section">
              <h3>About Us</h3>
              <a href="#">Mission</a>
              <a href="#">Team</a>
              <a href="#">Newsletter</a>
            </div>

            {/* Support Section */}
            <div className="nav-section">
              <h3>Support</h3>
              <a href="#">Contact</a>
              <a href="#">Refund Policy</a>
              <a href="#">FAQ's</a>
            </div>

            {/* Social Section */}
            <div className="nav-section">
              <h3>Social</h3>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">YouTube</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <span className="copyright">Copyright © MAXHELP</span>
          <a href="#" className="terms">Terms of Service</a>
          <a href="#" className="back-to-top">
            Back to top
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M3.5 10L8 5.5L12.5 10" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="square"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;