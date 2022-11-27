import  { React, useState }  from "react";


const SkillsList = ({skills}) => {

  const [isHovering, setIsHovering] = useState(false);
  const [classNameIcon, setClassNameIcon] = useState('');

  const handleMouseEnter = (classNameIcon) => {
    console.log(classNameIcon);
    setClassNameIcon(classNameIcon.target.id)
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setClassNameIcon('')
  };

  
  const renderList = () => {
    return skills.map( (skill, i) => {
      const hoverStyle = {filter:  `drop-shadow(0px 0px 3px #${skill.color}) contrast(100)`}


      return (
        <article key={i} 
          id={'experience__icon__'+skill.title}
          className={'experience__details experience__icon__'+skill.title}
          data-atropos-offset={skill.atropsOffset}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >

            <div
              id={'experience__icon__'+skill.title}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <h1 
                id={'experience__icon__'+skill.title}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={isHovering && classNameIcon === 'experience__icon__'+skill.title ? hoverStyle : {}} 
              >{ skill.icon ? <skill.icon  /> : skill.title }</h1>
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
