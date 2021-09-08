import React from 'react';

import { NavLink } from 'react-router-dom';

import classes from './Menu.module.scss'

const Menu = ({ open, links, closeDrawer }) => {
    const menuClasses = [classes.menu];

    if (open) {
        menuClasses.push(classes.open)
    }

    return (
        <nav className={menuClasses.join(" ")}>
            <ul>
                {links.map(link => (
                    <li key={`link_port_${link.title}`}>
                        <NavLink
                          exact
                          onClick={()=> { closeDrawer() }}
                          activeClassName={classes["active"]}
                          to={link.path}> {link.title} </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;