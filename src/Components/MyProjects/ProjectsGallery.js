import React from 'react';

//Components
import Project from './Project';

//Icons
import Github from '../../assets/GitHub-Mark-32px.png';
import Link from '../../assets/icons8-link-30.png';

//Images
import ProjectOne from '../../assets/Quorum_Project.jpg';

function ProjectsGallery() {
    return(
        <div className="projects-gallery">
            <Project project={ProjectOne} />
        </div>
    )
}

export default ProjectsGallery;