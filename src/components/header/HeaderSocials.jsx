import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'

const HeaderSocials = () => {
return (
<div className="header__socials" data-atropos-offset="5">
    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social__media_a"><BsLinkedin /></a>
    <a href="https://github.com" target="_blank" rel="noreferrer" className="social__media_a"><BsGithub /></a>
    <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="social__media_a"><BsInstagram /></a>
</div>
);
};

export default HeaderSocials;
