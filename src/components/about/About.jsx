import React from 'react'
import './about.css'
import ME from '../../assets/about-me2.jpeg'
import { FaAward, FaBuilding } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = ({t}) => {
  return (
    <section id="about">
      <h5>{t('About-me.get-to-know')}</h5>
      <h2>{t('About-me.about-me')}</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <div className="about__info">
                <h5>{t('About-me.experience')}</h5>
                <small>1+ {t('About-me.exp-description')}</small>
              </div>
            </article>

            <article className="about__card">
              <FaBuilding className="about__icon" />
              <div className="about__info">
                <h5>{t('About-me.companies')}</h5>
                <small>3+ {t('About-me.cop-countries')}</small>
              </div>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon " />
              <div className="about__info">
                <h5>{t('About-me.projects')}</h5>
                <small>10+ {t('About-me.projects-completed')}</small>
              </div>
            </article>
          </div>
        </div>
        <div className="about__text_and_image">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About" />
            </div>
          </div>
          <div className="about__text">
            <p>
                {t('About-me.description')}
            </p>
            <a href="#contact" className="btn btn-primary">{t('About-me.lets-talk')}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About