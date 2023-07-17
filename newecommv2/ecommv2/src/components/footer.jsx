import React from 'react';
import './footer.css';
// import {faInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li><a href="about.html">about us</a></li>
              <li><a href="services.html">our services</a></li>
              <li><a href="privacy.html">privacy policy</a></li>
              <li><a href="programs.html">affiliate program</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li><a href="faq.html">FAQ</a></li>
              <li><a href="s.html">shipping</a></li>
              <li><a href="r.html">returns</a></li>
              <li><a href="o.html">order status</a></li>
              <li><a href="p.html">payment options</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>online shop</h4>
            <ul>
              <li><a href="p.html">Plants</a></li>
              <li><a href="w.html">Workshops</a></li>
              <li><a href="e.html">Events</a></li>
              <li><a href="p.html">Private Parties</a></li>
            </ul>
          </div>

          {/* <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
              <a className="social-icons" href="i.html"><i className="fab fa-facebook-f"></i></a>
              <a className="social-icons" href="i.html"><i className="fab fa-twitter"></i></a>
              <a className="social-icons" href="i.html"><i className="fab fa-instagram"></i></a>
              <a className="social-icons" href="i.html"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
