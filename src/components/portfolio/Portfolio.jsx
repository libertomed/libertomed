import React from "react";
import './portfolio.css'

import ProjectsList from './ProjectsList.jsx'

import DEER from '../../assets/deer_hunter.png'


const projects = [
  { title: 'Deer Hunter', liveUri: 'https://github.com/', gitHubUri: 'https://github.com', image: DEER },
  { title: 'Deer Hunter', liveUri: 'https://github.com/', gitHubUri: 'https://github.com', image: DEER },
  { title: 'Deer Hunter', liveUri: 'https://github.com/', gitHubUri: 'https://github.com', image: DEER },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projetcs</h2>
      <div className="container portfolio__container">
        <ProjectsList projects={projects} />
      </div>

    </section>
  );
};

export default Portfolio;
