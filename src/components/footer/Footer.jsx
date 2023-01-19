import React from "react";
import './footer.css';
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
const Footer = () => {
    return <footer id="footer">
        <a href="#" className="footer__logo">Liberto Medina Ramírez</a>
        <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#expericence">Expericence</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer__socials">
            <a href="https://www.linkedin.com/in/libertomedina/"><AiFillLinkedin/></a>
            <a href="https://www.linkedin.com/in/libertomedina/"><AiFillGithub/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Liberto Medina Ramírez. All rigth reserved.</small>
        </div>
    </footer>;
};

export default Footer;
