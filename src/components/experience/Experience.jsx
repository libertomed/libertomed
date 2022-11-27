import React from 'react'
import './experience.css'
import SkillsList from './SkillsList'

import { TbBrandJavascript } from 'react-icons/tb'
import { SiHtml5, SiCss3, SiJquery, SiBootstrap, SiReact, SiVuedotjs, SiMysql, SiPhp, SiDocker, SiLaravel, SiSymfony, SiLinux, SiKubernetes } from 'react-icons/si'


import 'atropos/css'
import Atropos from 'atropos/react';

const Experience = () => {

  const frontend_skills = [
    { title: 'JavaScript', level: 'Experienced', atropsOffset: 6, icon: TbBrandJavascript, color: 'F7E018' },
    { title: 'HTML', level: 'Experienced', atropsOffset: 3, icon: SiHtml5, color: 'E65B25' },
    { title: 'CSS', level: 'Intermediate', atropsOffset: 1, icon: SiCss3, color: '0068BA' },
    { title: 'jQuery', level: 'Basic', atropsOffset: 6, icon: SiJquery, color: '0168AE' },
    { title: 'Bootstrap', level: 'Experienced', atropsOffset: 3, icon: SiBootstrap, color: '8411F6' },
    { title: 'React', level: 'Basic', atropsOffset: 1, icon: SiReact, color: '61DAFB' },
    { title: 'Vue', level: 'Experienced', atropsOffset: 6, icon: SiVuedotjs, color: '3FB27F' },
  ]

  const backend_skills = [
    { title: 'MySQL', level: 'Experienced', atropsOffset: 6, icon: SiMysql, color: 'DE8A00' },
    { title: 'PHP', level: 'Experienced', atropsOffset: 3, icon: SiPhp, color: '6B78B3' },
    { title: 'Docker', level: 'Basic', atropsOffset: 1, icon: SiDocker, color: '2391E6' },
    { title: 'Laravel', level: 'Experienced', atropsOffset: 6, icon: SiLaravel, color: 'F72B1E' },
    { title: 'Symfony 5', level: 'Basic', atropsOffset: 3, icon: SiSymfony, color: '000000' },
    { title: 'Linux', level: 'Experienced', atropsOffset: 6, icon: SiLinux, color: '000000' },
    { title: 'Kubernetes', level: 'Basic', atropsOffset: 3, icon: SiKubernetes, color: '306ADF' },
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