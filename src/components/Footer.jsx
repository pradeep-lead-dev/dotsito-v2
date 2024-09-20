import React from 'react';
import '../css/Footer.css'; // Import your CSS for the Footer

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section company">
          <h3>Company</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/solutions">Solutions</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <ul>
            <li><strong>Sales & Support:</strong> Dotsito Technologies</li>
            <li><i className="fas fa-map-marker-alt"></i> USA: +1 (434) 602-2654</li>
            <li><i className="fas fa-map-marker-alt"></i> UK: +44 7587390684</li>
            <li><i className="fas fa-map-marker-alt"></i> India: +91 4257 299473, +914257358130</li>
            <li><i className="fas fa-envelope"></i> operations@dotsito.com</li>
            <li>Address: No.115, Old Court Street, Akilandapuram, Kangeyam, Tiruppur District, Tamil Nadu, India - 638701</li>
          </ul>
        </div>

        <div className="footer-section others">
          <h3>Others</h3>
          <ul>
            <li><a href="/terms">Terms of Use</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/cookies">Cookies Policy</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://www.facebook.com/profile.php?id=100094367335336&mibextid=ZbWKwL"><i className="fab fa-facebook"></i> Facebook</a></li>
            <li><a href="https://x.com/DotsitoTech"><i className="fab fa-x-twitter"></i> Twitter</a></li>
            <li><a href="https://www.instagram.com/dotsitotechnologies/"><i className="fab fa-instagram"></i> Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/dotsito/"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Dotsito Technologies. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
