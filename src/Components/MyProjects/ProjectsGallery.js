import React from 'react';
import './projectStyles.css';

//Components
import Project from './Project';

//Icons
import GithubIcon from '../../Images/githubIcon.png';
import LinkIcon from '../../Images/linkIcon.png';

//Images
import QuorumProject from '../../Images/quorumProject.jpg';
import EnLaNubeProject from '../../Images/EnLaNubeProject.jpg';
import ToDoListProject from '../../Images/ToDoListProject.jpg';
import PokeProject from '../../Images/PokeProject.jpg';

function ProjectsGallery() {

    return(
        <div className="projects-gallery">
            <div>
                <Project photo={QuorumProject} github={GithubIcon} linkIcon={LinkIcon} githubLink="https://github.com/Emilia-Guadalupe/Quorum-iTeam-proyect" pageLink="https://quorum-i-team-proyect.vercel.app/" />
                <Project photo={EnLaNubeProject} github={GithubIcon} linkIcon={LinkIcon} githubLink="https://github.com/Emilia-Guadalupe/React-Proyect" pageLink="https://wonderful-snyder-c0c791.netlify.app/" />
            </div>
            <div>
                <Project photo={ToDoListProject} github={GithubIcon} linkIcon={LinkIcon} githubLink="https://github.com/Emilia-Guadalupe/To-Do-List-App" pageLink="https://inspiring-wright-0c51b2.netlify.app" />
                <Project photo={PokeProject} github={GithubIcon} linkIcon={LinkIcon} githubLink="https://github.com/Emilia-Guadalupe/PokeReact" pageLink="https://stupefied-swirles-51325b.netlify.app/" />
            </div>
        </div>
    )
}

export default ProjectsGallery;