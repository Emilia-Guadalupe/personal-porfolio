import React, { useState } from "react";
import { HeaderWrapper } from './HeaderStyles';
import NavBar from '../NavBar/NavBar';
import MenuButton from '../MenuButton/MenuButton';

function Header() {
    
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
    <HeaderWrapper>
        <h2 className="label">Emi Guadalupe</h2>
        <NavBar open={open} />
        <MenuButton open={open} handleClick={handleClick} />
    </HeaderWrapper>
    );
}

export default Header;
