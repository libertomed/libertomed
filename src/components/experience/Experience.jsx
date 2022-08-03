import React from 'react'
import './experience.css'
import SkillsList from './SkillsList'

import 'atropos/css'
import Atropos from 'atropos/react';

const Experience = () => {

  const frontend_skills = [
    { title: 'JavaScript', level: 'Experienced', atropsOffset: 6},
    { title: 'HTML', level: 'Experienced', atropsOffset: 3 },
    { title: 'CSS', level: 'Intermediate', atropsOffset: 1 },
    { title: 'jQuery', level: 'Basic', atropsOffset: 6 },
    { title: 'Bootstrap', level: 'Experienced', atropsOffset: 3 },
    { title: 'React', level: 'Basic', atropsOffset: 1 },
    { title: 'Vue', level: 'Experienced', atropsOffset: 6 },
    { title: 'Vue Composition API', level: 'Experienced', atropsOffset: 3 },
  ]

  const backend_skills = [
    { title: 'MySQL', level: 'Experienced', atropsOffset: 6},
    { title: 'PHP', level: 'Experienced', atropsOffset: 3},
    { title: 'Docker', level: 'Basic', atropsOffset: 1},
    { title: 'Laravel', level: 'Experienced', atropsOffset: 6},
    { title: 'Symfony 5', level: 'Basic', atropsOffset: 3},
    { title: 'Python', level: 'Basic', atropsOffset: 1},
    { title: 'Linux', level: 'Experienced', atropsOffset: 6},
    { title: 'Kubernetes', level: 'Basic', atropsOffset: 3},
  ]

  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <Atropos
          className='my__atropos2'
          shadow={false}
          highlight={false}
        >

          <div className="experience__frontend exp__content_1">
            <h3 data-atropos-offset='5'>Frontend Development</h3>
            <div className="experience__content">
              <SkillsList skills={frontend_skills} />
            </div>
          </div>
        </Atropos>

        <Atropos
          className='my__atropos2'
          shadow={false}
          highlight={false}
        >
          <div className="experience__balckend">
            <h3 data-atropos-offset='5'>Backend Development</h3>
            <div className="experience__content">
              <SkillsList skills={backend_skills}/>
            </div>
          </div>
        </Atropos>
      </div>
    </section>
  )
}

export default Experience