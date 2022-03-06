import React, { useState, useRef } from 'react';

import useOnClickOutside from 'Hooks/UseOnClickOutside';
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';

function BurgerMenu({ links }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useOnClickOutside(menuRef, () => {
    setMenuOpen(false);
  });

  return (
    <div className="p-4 absolute top-0 left-0" ref={menuRef}>
      <Burger
        onClick={() => { setMenuOpen(!menuOpen); }}
        open={menuOpen}
      />
      <Menu closeDrawer={() => setMenuOpen(false)} open={menuOpen} links={links} />
    </div>
  );
}

export default BurgerMenu;
