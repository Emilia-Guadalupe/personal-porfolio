import React from 'react';
import './projectStyles.css';

//Components
import Project from './Project';

//Icons
import GithubIcon from '../../Images/githubIcon.png';
import LinkIcon from '../../Images/linkIcon.png';

//Images
import QuorumProject from '../../Images/quorumProject.jpg';

function ProjectsGallery() {

    return(
        <div className="projects-gallery">
            <Project photo={QuorumProject} github={GithubIcon} linkIcon={LinkIcon} githubLink="https://github.com/Emilia-Guadalupe/Quorum-iTeam-proyect" pageLink="https://quorum-i-team-proyect.vercel.app/" />
        </div>
    )
}

export default ProjectsGallery;