import React from 'react'

function Project({photo, githubLink, pageLink}) {
    return(
        <div className="total-project-container">
            <div className="projects-container">
                <img className="project" src={photo} alt="Proyecto" />
            </div>
            <div className="hover-container">
                <div className="github-container">
                    <i className="fab fa-github"></i>
                    <a className="link-styles" href={githubLink} target="_blank" rel="noreferrer">Ver en Github</a>
                </div>
                <div className="link-container">
                    <i className="fas fa-link"></i>
                    <a className="link-styles" href={pageLink} target="_blank" rel="noreferrer">Ver el proyecto</a>
                </div>
            </div>
        </div>
    )
}

export default Project;