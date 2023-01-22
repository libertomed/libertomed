import React from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import {GiClassicalKnowledge} from 'react-icons/gi'
import { BiMessageSquareDetail } from "react-icons/bi";
import { useNav } from "./useNav";

const Nav = ({t}) => {
  const { changeActive } = useNav()
  return (
    <nav id="nav">
      <a
        href="#home"
        onClick={() => changeActive("homeNav")}
        className={"homeNav active"}
        title={t('nav.home')}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => changeActive("about")}
        className={"about"}
        title={t('nav.about')}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => changeActive("experience")}
        className={"experience"}
        title={t('nav.experience')}
      >
        <GiClassicalKnowledge />
      </a>
      <a
        href="#portfolio"
        onClick={() => changeActive("portfolio")}
        className={"portfolio"}
        title={t('nav.portfolio')}
      >
        <AiOutlineFundProjectionScreen />
      </a>
      <a
        href="#contact"
        onClick={() => changeActive("contact")}
        className={"contact"}
        title={t('nav.contact')}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
