import React from "react";
import './footer.css';
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
const Footer = ({t}) => {
    return <footer id="footer">
        <a href="#home" className="footer__logo">Liberto Medina Ramírez</a>
        <ul className="permalinks">
            <li><a href="#home">{t('nav.home')}</a></li>
            <li><a href="#about">{t('nav.about')}</a></li>
            <li><a href="#expericence">{t('nav.experience')}</a></li>
            <li><a href="#portfolio">{t('nav.portfolio')}</a></li>
            <li><a href="#contact">{t('nav.contact')}</a></li>
        </ul>
        <div className="footer__socials">
            <a href="https://www.linkedin.com/in/libertomedina/" target="_blank" rel="noreferrer"><AiFillLinkedin/></a>
            <a href="https://github.com/libertomed" target="_blank" rel="noreferrer"><AiFillGithub/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Liberto Medina Ramírez. {t('footer.copyright')}</small>
        </div>
    </footer>;
};

export default Footer;
