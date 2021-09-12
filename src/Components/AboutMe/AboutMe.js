import React from 'react';

//Images
import ProfileDrawing from './assets/undraw_online_resume_re_ru7s.svg';

function AboutMe() {
    return(
        <div className="about-me-container">
            <div className="about-me-part">
                <h2 className="second-title">Sobre mi</h2>
                <p className="about-me-text">Trabajé en distintas tareas vinculadas al desarrollo de fondos y a la comunicación para organizaciones sociales. También tuve la posibilidad de trabajar en el maquetado y administración de la página web (Wordpress) de una organización. Así encontré algo que me encanta en la programación y decidí cambiar mi carrera profesional. Es un área en la que puedo aprender continuamente, ser creativa y trabajar en equipo.</p>
                <p className="about-me-text">Tengo muchas ganas de seguir creciendo y formándome como programadora, aportando mucho entusiasmo, curiosidad y compromiso a mi próximo equipo.</p>
            </div>
            <div className="about-me-part">
                <img className="image_drawing" src={ProfileDrawing} alt="profile drawing"/>
            </div>
        </div>
    )
}

export default AboutMe;

