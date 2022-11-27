import React from "react";
import Project from "./Project.jsx";

const ProjectsList = ({projects}) => {
    console.log(projects);
    const renderList = () => {
        return projects.map( (project) => {
            console.log(project);
            return (
                <Project
                    title={project.title}
                    liveUri={project.liveUri}
                    gitHubUri={project.gitHubUri}
                    image={project.image}
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
