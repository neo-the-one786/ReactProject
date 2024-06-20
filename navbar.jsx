// src/components/Navbar.jsx
import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px',
            backgroundColor: '#252525',
        }}>
            <div style={{
                height: '50px',
            }}>
                <img src="path_to_logo" alt="Rhyno EV"/>
            </div>
            <ul style={{
                display: 'flex',
                listStyle: 'none',
            }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li style={{
                    position: 'relative',
                    display: 'inline-block',
                }}>
                    <Link to="/products">Products</Link>
                    <div style={{
                        display: 'none',
                        position: 'absolute',
                        backgroundColor: '#f9f9f9',
                        minWidth: '160px',
                        boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
                        zIndex: 1,
                    }}>
                        <Link to="/product1">SE03 Lite</Link>
                        <Link to="/product2">SE03</Link>
                        <Link to="/product3">SE03 Max</Link>
                        <Link to="/compare-all">Compare All</Link>
                    </div>
                </li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/pre-book">Pre-Book Now</Link></li>
            </ul>
        </nav>
    );
}


export default Navbar;
