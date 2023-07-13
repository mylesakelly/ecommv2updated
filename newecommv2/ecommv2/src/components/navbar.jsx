import React from 'react';
import { Link } from "react-router-dom";
import '../css/navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact Us</Link>


      </div>
    </div>
  )
}

export default Navbar;