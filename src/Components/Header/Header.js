import React, { useState } from "react";
import { HeaderWrapper } from './HeaderStyles';
import NavBar from '../NavBar/NavBar';
import MenuButton from '../MenuButton/MenuButton';
import { Link } from 'react-router-dom';

function Header() {
    
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
    <HeaderWrapper>
        <Link to="/">
            <h2 className="label">Emi Guadalupe</h2>
        </Link>
        <NavBar open={open} />
        <MenuButton open={open} handleClick={handleClick} />
    </HeaderWrapper>
    );
}

export default Header;
