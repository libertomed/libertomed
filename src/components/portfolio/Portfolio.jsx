import React from "react";
import './portfolio.css'

import ProjectsList from './ProjectsList.jsx'

import SYMBIA from '../../assets/symbia.png'
import SPORTALIS from '../../assets/sportalis.png'
import LCTEU from '../../assets/lcteu.png'
import LONDONCALLING from '../../assets/londoncalling.png'
import EXAMS from '../../assets/exams.png'
import DIRECTOTRIPS from '../../assets/directo-trips.png'


const projects = [
  { title: 'portfolio.symbia.title', liveUri: 'https://www.symbia.es/', gitHubUri: null, image: SYMBIA, description: 'portfolio.symbia.description', color: '#ed6d6998' },
  { title: 'portfolio.lcteu.title', liveUri: 'https://es.lcteurope.com/', gitHubUri: null, image: LCTEU, description: 'portfolio.lcteu.description' , color: '#3F83C598' },
  { title: 'portfolio.sportalis.title', liveUri: 'https://es.sportalis.net/', gitHubUri: null, image: SPORTALIS, description: 'portfolio.sportalis.description', color: '#01B1EC88' },
  { title: 'portfolio.londoncalling.title', liveUri: 'https://app.london-calling.es/online-registration', gitHubUri: null, image: LONDONCALLING, description: 'portfolio.londoncalling.description', color: '#6A7A5D98' },
  { title: 'portfolio.exams.title', liveUri: 'https://www.examslaspalmas.com/', gitHubUri: null, image: EXAMS, description: 'portfolio.exams.description', color: '#00618B88' },
  { title: 'portfolio.directotrips.title', liveUri: 'https://www.directotrips.com/', gitHubUri: null, image: DIRECTOTRIPS, description: 'portfolio.directotrips.description', color: '#FF318088' },
]

const Portfolio = ({t}) => {
  return (
    <section id="portfolio">
      <h5>{t('portfolio.subtitle')}</h5>
      <h2>{t('portfolio.title')}</h2>
      <div className="container portfolio__container">
        <ProjectsList projects={projects} t={t}/>
      </div>

    </section>
  );
};

export default Portfolio;
