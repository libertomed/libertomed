import React from "react";
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const HeaderSocials = () => {
return (
<div className="header__socials" data-atropos-offset="5">
    <a href="https://www.linkedin.com/in/libertomedina/" target="_blank" rel="noreferrer" className="social__media_a"><BsLinkedin /></a>
    <a href="https://github.com/libertomed" target="_blank" rel="noreferrer" className="social__media_a"><BsGithub /></a>
</div>
);
};

export default HeaderSocials;
