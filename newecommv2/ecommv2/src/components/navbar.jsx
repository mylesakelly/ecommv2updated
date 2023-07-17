import React from 'react';
import '../css/navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
  
      <a href = "/" className="site-title">Flora & Fauna
      </a>
      <ul>

        <li>
        <a href = "/products">Shop</a>
        </li>

        <li>
        <a href = "/contact">Contact Us</a>
        </li>


      </ul>
    </nav>
  

  )
}

export default Navbar;