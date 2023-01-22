import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me_hi_right.png'
import 'atropos/css'
import Atropos from 'atropos/react';
import HeaderSocials from './HeaderSocials.jsx'

const Header = ({t}) => {
  return (
    <header id="home">

    <Atropos
      className="atropos my__atropos"
      shadow={false}
        highlight={false}
        rotateTouch={false}
        rotateXMax={5}
        rotateYMax={5}
        rotateChildren
    >
      <div
      className="container header__container"
      >
          <div className="me">
            <div className="header__info">
              <h5>{t('header.hello')} </h5>
              <h1>Liberto Medina</h1>
              <h5 className="text-light">{t('header.job')}</h5>
              <CTA t={t} />
                <HeaderSocials />
            </div>
            <img src={ME} alt="liberto medina" data-atropos-offset="-3" />
          </div>

        
      </div>

    </Atropos>
    </header>
  )
}

export default Header