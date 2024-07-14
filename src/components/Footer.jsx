import React from "react";
import "./comonent-style/Footer.css";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <h4>About Us</h4>
          <ul>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Help</h4>
          <ul>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a href="#" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copy">
        <p>&copy; 2024 social media app. All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
