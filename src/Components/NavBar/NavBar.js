import React from 'react';
import { NavBarWrapper } from './NavBarStyles';
import { Link } from 'react-router-dom';

function NavBar({open}){
    return(
        <NavBarWrapper open={open}>
            <Link className="link_styles" to="/my-stack">Mi Stack</Link>
            <Link className="link_styles" to="/my-projects">Mis Proyectos</Link>
            <p className="link_styles">Link</p>
        </NavBarWrapper>
    )
}


export default NavBar;