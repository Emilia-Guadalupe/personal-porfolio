import React from 'react';
import ProjectsGallery from './ProjectsGallery';
import './myProjectsStyles.scss';

function MyProjects() {
    return(
        <div className="my-projects-container">
            <h3 className="my-projects-title">
                Mis proyectos
            </h3>
            <p className="my-projects-text">
                Algunos de mis proyectos más recientes hechos con React son: una librería e-commerce vinculada a Firebase, una lista de pendientes, una landing page, un Pókedex vinculado a una API entre otros. Están disponibles para verse en mi perfil de Github. 
            </p>
            <ProjectsGallery />
        </div>
    )
}

export default MyProjects;