import React from 'react';
import './stackStyles.scss';

function StackList({id, name, img}) {

    return(
        <div key={id} className="stack-container">
            <img className="stack-image" src={img} alt="stack logo" />
            <p className="stack-name">{name}</p>
        </div>
    )
}

export default StackList;