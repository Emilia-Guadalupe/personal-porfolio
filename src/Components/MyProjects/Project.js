import React from 'react'

function Project({ project, github, linkIcon, githubLink, projectLink }) {
    return(
        <>
            <div className="projects-container">
                <img src={project} alt="Proyecto" />
            </div>
                <div className="hover-container">
                    <div className="github-container">
                        <img src={github} alt="Github Icon" />
                        <a href={githubLink} target="_blank" rel="noreferrer">Ver en Github</a>
                    </div>
                <div className="link-container">
                    <img src={linkIcon} alt="Link Icon" />
                    <a href={projectLink} target="_blank" rel="noreferrer">Ver el proyecto</a>
                </div>
            </div>
        </>
    )
}

export default Project;