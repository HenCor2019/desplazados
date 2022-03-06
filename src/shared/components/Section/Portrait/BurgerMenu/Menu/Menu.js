import React from 'react';

import { NavLink } from 'react-router-dom';

import TranslateButtons from 'shared/components/TranslateButtons/TranslateButtons';
import classes from './Menu.module.scss';

function Menu({ open, links, closeDrawer }) {
  const menuClasses = [classes.menu];

  if (open) {
    menuClasses.push(classes.open);
  }

  return (
    <nav className={menuClasses.join(' ')}>
      <ul>
        {links.map((link) => (
          <li key={`link_port_${link.title}`}>
            <NavLink
              exact
              onClick={() => {
                closeDrawer();
              }}
              activeClassName={classes.active}
              to={link.path}
            >
              {' '}
              {link.title}
              {' '}
            </NavLink>
          </li>
        ))}
        <li>
          <TranslateButtons type="navbar-portrait" />
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
