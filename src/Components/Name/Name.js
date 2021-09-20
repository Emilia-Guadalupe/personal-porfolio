import React from 'react';
import './nameStyles.scss';

function Name() {
    return(
        <div className="title_container">
            <div className="elements_container">
                <p>PHOTO</p>
            </div>
            <div className="name_container">
                <h1 className="name_text">Emilia Guadalupe</h1>
                <p className="dev_text">Web Developer</p>
            </div>
        </div>
    )
}

export default Name;