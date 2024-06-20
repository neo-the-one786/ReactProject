// src/components/Footer.js
import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <footer style={{
            backgroundColor: '#252525',
            color: '#FFFFFF',
            padding: '20px 0',
            textAlign: 'center',
        }}>
            <div style={styles.footerLinks}>
                <ul style={styles.footerList}>
                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    <li><Link to="/refund-policy">Refund Policy</Link></li>
                    <li><Link to="/website-policy">Website Policy</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><a href="https://www.linkedin.com/company/rhyno-ev">Career</a></li>
                    <li><Link to="/rentals">Rentals</Link></li>
                </ul>
            </div>
            <div style={styles.social}>
                <a href="https://www.instagram.com/rhyno_ev"><img src="path_to_instagram_icon" alt="Instagram"/></a>
                <a href="https://www.linkedin.com/company/rhyno-ev"><img src="path_to_linkedin_icon"
                                                                         alt="LinkedIn"/></a>
            </div>
        </footer>
    );
}

const styles = {
    footerLinks: {
        marginBottom: '10px',
    },
    footerList: {
        listStyle: 'none',
        padding: 0,
    },
    social: {
        display: 'flex',
        justifyContent: 'center',
    },
};

export default Footer;
