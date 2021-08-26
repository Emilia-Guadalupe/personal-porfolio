import React from 'react';
import './myStackStyles.css';

//Helpers
import { frontStack } from './frontStack';
import { backStack } from './backStack';

function MyStack() {

    return(
        <div className="full-stack-page">
            <div className="my-stack-container">
                <h3>Mi Stack y tecnologías</h3>
                <p className="about-my-stack">Empecé mi formación como Desarrolladora especializándome en Front End y actualmente me encuentro estudiando Node.js y Express, para poder contar con conocimientos de Back End</p>
            </div>
            <div className="stack-list-container">
            <>
                {frontStack.map((e) =>  {
                    return(
                        <div key={e.id} className="stack-container">
                            <img className="stack-image" src={e.img} alt="stack logo" />
                            <p className="stack-name">{e.name}</p>
                        </div>
                    )
                })}
            </>
            <>
                {backStack.map((e) => {
                    return(
                        <div key={e.id} className="stack-container">
                            <p className="stack-name">{e.name}</p>
                        </div>
                    )
                })}
            </>
            </div>
        </div>
    )
}

export default MyStack;