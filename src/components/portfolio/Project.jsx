import React from "react";
import { VscGithub } from 'react-icons/vsc'

const Project = ({title, liveUri, gitHubUri, image, description, color,t}) => {

    const btnStyle = {
        transition: '0s, background 400ms' 
    }

    return (
        <article className="portfolio__item"
        >
            <img src={image} alt={t(title)}/>
            <div className="portfolio__item-title"
                style={{background: color}}
            >
                <h2>{t(title)}</h2>
            </div>
            <div className="portfolio__item-layer">
                <div className="portfolio__item-description">
                    <span dangerouslySetInnerHTML={{__html: t(description)}}></span>
                </div>
                <div className="portfolio__item-cta">
                    { gitHubUri && <a href={gitHubUri} className="btn btn-reverse" style={btnStyle} alt="github" target="_blank" rel="noreferrer"><VscGithub size={25} /></a>}
                    { liveUri && <a href={liveUri} className="btn btn-primary" style={btnStyle} target="_blank" rel="noreferrer">{t('portfolio.go-life')}</a>}
                </div>
            </div>
        </article>
    );
};

export default Project;
