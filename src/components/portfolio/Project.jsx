import React from "react";
import { VscGithub } from 'react-icons/vsc'

const Project = ({title, liveUri, gitHubUri, image}) => {
    console.log(image);
    const myStyle = {
        backgroundImage: `linear-gradient(
            #2c2c6caa,
            #2c2c6ccf
            ),url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    return (
        <article className="portfolio__item"
            style={myStyle}
        >
            <h3>{title}</h3>
            <div className="portfolio__item-description">
                <p>
                    Brebe descripción del proyecto
                </p>
            </div>
            <div className="portfolio__item-cta">
                <a href={gitHubUri} className="btn btn-reverse" alt="github" target="_blank"><VscGithub size={25} /></a>
                <a href={liveUri} className="btn btn-primary" target="_blank">Life Demo</a>
            </div>
        </article>
    );
};

export default Project;
