import React from 'react';
import './aboutMeStyles.scss';

//Images
import ProfileDrawing from './assets/undraw_online_resume_re_ru7s.svg';

function AboutMe() {
    return(
        <div className="about-me-container">
            <div className="image-part">
                <img className="image_drawing" src={ProfileDrawing} alt="profile drawing"/>
            </div>
            <div className="about-me-part">
                <h2 className="second-title">Sobre mi</h2>
                <p className="about-me-text">Estudié Comunicación Social y marketing, pero encontré algo que me encanta en la programación y decidí cambiar mi carrera</p>
                <p className="about-me-text">Actualmente me estoy formando como Full Stack Developer, estudiando Node.js, Express y Next.js</p>
                <p className="about-me-text">Además de programar, amo leer y soy fantática de las historias de sci/fi o fantasy</p>
            </div>
        </div>
    )
}

export default AboutMe;

