// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <img src="path_to_logo" alt="Rhyno EV" />
      </div>
      <ul style={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li>
          <div style={styles.dropdown}>
            <Link to="/products">Products</Link>
            <div style={styles.dropdownContent}>
              <Link to="/product1">SE03 Lite</Link>
              <Link to="/product2">SE03</Link>
              <Link to="/product3">SE03 Max</Link>
              <Link to="/compare-all">Compare All</Link>
            </div>
          </div>
        </li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/pre-book">Pre-Book Now</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#252525',
  },
  logo: {
    height: '50px',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
  },
  dropdown: {
    position: 'relative',
    display: 'inline-block',
  },
  dropdownContent: {
    display: 'none',
    position: 'absolute',
    backgroundColor: '#f9f9f9',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
  },
  dropdown: {
    ':hover .dropdownContent': {
      display: 'block',
    },
  },
};

export default Navbar;
