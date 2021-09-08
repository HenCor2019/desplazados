import React, { useState, useRef } from 'react';

import Burger from './Burger/Burger';
import Menu from './Menu/Menu';

import useOnClickOutside from '../../../../Hooks/UseOnClickOutside';

const BurgerMenu = ({ links }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef();

    useOnClickOutside(menuRef, ()=> {
      setMenuOpen(false)
    });

    return (
        <div className="p-4" ref={menuRef}>
            <Menu closeDrawer={()=> setMenuOpen(false)} open={menuOpen} links={links} />
            <Burger
                onClick={() => { setMenuOpen(!menuOpen) }}
                open={menuOpen} />
        </div>
    );
}

export default BurgerMenu;