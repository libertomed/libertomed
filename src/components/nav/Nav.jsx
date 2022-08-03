import React from "react";
import "./nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = ({t}) => {
  const [activeNav, setActiveNav] = useState("#");

  const checkActive = (className) => {
    return activeNav === className ? "active" : "";
  };
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav("#")}
        className={checkActive("#")}
        title={t('nav.home')}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("about")}
        className={checkActive("about")}
        title={t('nav.about')}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("experience")}
        className={checkActive("experience")}
        title={t('nav.experience')}
      >
        <AiOutlineFundProjectionScreen />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("services")}
        className={checkActive("services")}
        title={t('nav.services')}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("contact")}
        className={checkActive("#contact")}
        title={t('nav.contact')}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
