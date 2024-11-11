import React from "react";
import logo from "../assets/images/logo.png"; // Adjust the path as necessary

import {  PhoneIcon , mail} from '../assets/icons';

const Footer = () => {
  return (
<footer className="footer">
  <div className="footer-top">
    <div className="container">
      <div className="footer-brand">
        <a href="#" className="logo">
          <img src={logo} alt="Tourly logo" />
        </a>
        <p className="footer-text">
          Trak Twin enhances solo travel with AI-driven matching, tailored itineraries, real-time updates, pre-trip connections, and a vibrant travel community.
        </p>
      </div>

      <div className="footer-form">
        <p className="form-text">
          Subscribe our newsletter for more update & news !!
        </p>
        <form action="" className="form-wrapper">
          <input
            type="email"
            name="email"
            className="input-field"
            placeholder="Enter Your Email"
            required
          />
          <button type="submit" className="btn btn-secondary">
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Contact Section */}
      <div className="footer-contact">
        <h4 className="contact-title">Contact Us</h4>
        <p className="contact-text">Feel free to contact and reach us !!</p>
        <ul>
          <li className="contact-item">
            <ion-icon name="call-outline"></ion-icon>
            <a href="tel:+01123456790" className="contact-link">
            <PhoneIcon className= "w-5 h-5"/> +91 9785701319
            </a>
          </li>
          <li className="contact-item">
            <mail />
            <a href="mailto:info.tourly.com" className="contact-link">
              traktwin@gmail.com
            </a>
          </li>
          <li className="contact-item">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1227315718415!2d75.81574347507417!3d26.8678414766739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7b51669dee9%3A0x3708a6ae96453829!2sBhamashah%20Techno%20Hub!5e0!3m2!1sen!2sin!4v1731066236773!5m2!1sen!2sin"
              width="700px"
              height="300px"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </li>
        </ul>
      </div>

      {/* Footer Form Section */}
      
    </div>
  </div>

  {/* Footer Bottom Section */}
  <div className="footer-bottom">
    <div className="container">
      <p className="copyright">
        &copy; 2022 <a href="">traktwin</a>. All rights reserved
      </p>
      <ul className="footer-bottom-list">
        <li>
          <a href="#" className="footer-bottom-link">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="footer-bottom-link">
            Term & Condition
          </a> </li>
        <li>
          <a href="#" className="footer-bottom-link">
            FAQ
          </a>
        </li>
      </ul>
    </div>
  </div>
</footer>
  );
};

export default Footer;
