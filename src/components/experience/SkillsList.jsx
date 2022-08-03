import React from "react";
import { FiCheckCircle } from 'react-icons/fi'

const SkillsList = ({skills}) => {
  const renderList = () => {
    return skills.map( skill => {
      return (
        <article className="experience__details" data-atropos-offset={skill.atropsOffset}>
            <FiCheckCircle className="experience__details-icon"/>
            <div>
              <h4>{ skill.title }</h4>
              <small>{ skill.level }</small>
            </div>
        </article>
      )
    })
  }

  return (
    <>
      { renderList() }
    </>
  );
};

export default SkillsList;
