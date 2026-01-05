import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="logo">
              <i className="fa-solid fa-brain"></i> NexAI
            </div>
            <p>Empowering enterprises with cutting-edge artificial intelligence solutions, from custom model training to autonomous agents.</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Model Training</a></li>
              <li><a href="#">RAG Solutions</a></li>
              <li><a href="#">AI Agents</a></li>
              <li><a href="#">Computer Vision</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="#"><i className="fa-brands fa-linkedin"></i> LinkedIn</a></li>
              <li><a href="#"><i className="fa-brands fa-twitter"></i> Twitter</a></li>
              <li><a href="#"><i className="fa-brands fa-github"></i> GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 NexAI Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;