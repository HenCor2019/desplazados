import React from 'react';

import classes from './Menu.module.scss'

const Menu = ({ open, links }) => {
    const menuClasses = [classes.menu];

    if (open) {
        menuClasses.push(classes.open)
    }

    return (
        <nav className={menuClasses.join(" ")}>
            <ul>
                {links.map(link => (
                    <li key={`link_port_${link.title}`}>
                        <a href={link.path}> {link.title} </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;