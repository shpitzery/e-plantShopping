import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <>
        <footer className="footer">
            <p> &copy; 2024 Paradise Nursery Inc. all rights reserved. </p>
            <nav>
                <ul>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="privacy">Privacy Policy</a></li>
                </ul>
            </nav>
        </footer>
        </>
    )
}
export default Footer;