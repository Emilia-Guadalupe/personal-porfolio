import React from 'react'
import './projectStyles.css';

function Project({photo, github, githubLink, linkIcon, pageLink}) {
    return(
        <div className="total-project-container">
            <div className="hover-container">
                <div className="github-container">
                    <img src={github} alt="github icon" className="github-icon" />
                    <a href={githubLink} target="_blank" rel="noreferrer">Ver en Github</a>
                </div>
                <div className="link-container">
                    <img src={linkIcon} alt="link Icon" className="link-icon" />
                    <a href={pageLink} target="_blank" rel="noreferrer">Ver el proyecto</a>
                </div>
            </div>
            <div className="projects-container">
                <img className="project" src={photo} alt="Proyecto" />
            </div>
        </div>
    )
}

export default Project;