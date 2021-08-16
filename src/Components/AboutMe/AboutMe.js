import React from 'react';
import './aboutMeStyles.css';

//Images
import ProfileDrawing from './assets/undraw_online_resume_re_ru7s.svg';

function AboutMe() {
    return(
        <div className="about-me-container">
            <div className="about-me-part">
                <h2 className="second-title">Sobre mi</h2>
                <p className="about-me-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className="about-me-part">
                <img className="image_drawing" src={ProfileDrawing} alt="profile drawing"/>
            </div>
        </div>
    )
}

export default AboutMe;

