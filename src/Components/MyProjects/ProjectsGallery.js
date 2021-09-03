import React from 'react';
import './projectsStyles.css';

//Components
import Project from './Project';

//Images
import QuorumProject from '../../Images/quorumProject.jpg';
import EnLaNubeProject from '../../Images/EnLaNubeProject.jpg';
import ToDoListProject from '../../Images/ToDoListProject.jpg';
import PokeProject from '../../Images/PokeProject.jpg';

function ProjectsGallery() {

    return(
        <div className="projects-gallery">
                <Project photo={QuorumProject} githubLink="https://github.com/Emilia-Guadalupe/Quorum-iTeam-proyect" pageLink="https://quorum-i-team-proyect.vercel.app/" />
                <Project photo={EnLaNubeProject} githubLink="https://github.com/Emilia-Guadalupe/React-Proyect" pageLink="https://wonderful-snyder-c0c791.netlify.app/" />
                <Project photo={ToDoListProject} githubLink="https://github.com/Emilia-Guadalupe/To-Do-List-App" pageLink="https://inspiring-wright-0c51b2.netlify.app" />
                <Project photo={PokeProject} githubLink="https://github.com/Emilia-Guadalupe/PokeReact" pageLink="https://stupefied-swirles-51325b.netlify.app/" />
        </div>
    )
}

export default ProjectsGallery;