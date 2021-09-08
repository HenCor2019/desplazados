import React, { useState } from 'react';

import Burger from './Burger/Burger';
import Menu from './Menu/Menu';

const BurgerMenu = ({ links }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="p-4">
            <Menu open={menuOpen} links={links} />
            <Burger
                onClick={() => { setMenuOpen(!menuOpen) }}
                open={menuOpen} />
        </div>
    );
}

export default BurgerMenu;