import React from 'react';
import './Footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Footer Left Section: Copyright */}
        <div className="footer-section">
          <p>&copy; 2024 My Website. All rights reserved.</p>
        </div>

        {/* Footer Center Section: Links */}
        <div className="footer-section">
          <a href="/about" className="footer-link">About</a>
          <a href="/contact" className="footer-link">Contact</a>
          <a href="/privacy" className="footer-link">Privacy Policy</a>
        </div>

        {/* Footer Right Section: Social Media Icons */}
        <div className="footer-section">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="/icons/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="/icons/twitter-icon.png" alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="/icons/instagram-icon.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
