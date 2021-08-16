import React from 'react';
import './aboutMeStyles.css';

//Images
import ProfileDrawing from './assets/undraw_online_resume_re_ru7s.svg';

function AboutMe() {
    return(
        <div className="about-me-container">
            <div className="about-me-part">
                <h2>Sobre Mi</h2>
                <p>Lorem ipsum dolor sit amet. Loren ipsum loren loren impsum ipsum</p>
            </div>
            <div className="about-me-part">
                <img className="image_drawing" src={ProfileDrawing} alt="profile drawing"/>
            </div>
        </div>
    )
}

export default AboutMe;

