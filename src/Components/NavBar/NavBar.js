import React from 'react';
import { NavBarWrapper } from './NavBarStyles';

function NavBar({open}){
    return(
        <NavBarWrapper open={open}>
            <p className="link_styles">Link</p>
            <p className="link_styles">Link</p>
            <p className="link_styles">Link</p>
        </NavBarWrapper>
    )
}


export default NavBar;