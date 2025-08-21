import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

function Footer({ darkMode }) {
  return (
    <footer className={`footer ${darkMode ? "dark" : "light"}`}>
      <div className="footer-container">
        
        {/* Logo & About */}
        <div className="footer-section about">
          <h2>ChatBot App</h2>
          <p>Helping you connect, chat, and achieve more with smart assistance.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section newsletter">
          <h3>Stay Updated</h3>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

      </div>

      {/* Social Icons */}
      <div className="footer-social">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedinIn /></a>
      </div>

      {/* Copyright */}
      <p className="footer-copy">
        © {new Date().getFullYear()} YourAssistant. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
