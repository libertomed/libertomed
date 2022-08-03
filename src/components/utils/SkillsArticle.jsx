import React from "react";
import { FiCheckCircle } from 'react-icons/fi'

const SkillsArticle = ({title, icon, level}) => {
    return (
        <article class="experience__details">
            <FiCheckCircle />
            <h4>{ title }</h4>
            <small>{ level }</small>
        </article>
    );
};

export default SkillsArticle;
