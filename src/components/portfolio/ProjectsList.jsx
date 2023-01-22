import React from "react";
import Project from "./Project.jsx";

const ProjectsList = ({projects, t}) => {
    const renderList = () => {
        return projects.map( (project) => {
            return (
                <Project
                    title={project.title}
                    description={project.description}
                    liveUri={project.liveUri}
                    gitHubUri={project.gitHubUri}
                    image={project.image}
                    color={project.color}
                    t={t}
                ></Project>
            )
        })
    }
    return (
        <>
            { renderList() }
        </>
    );
};

export default ProjectsList;
