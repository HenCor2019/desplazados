import React from "react";

import { NavLink } from 'react-router-dom';
import classes from './Landscape.module.scss';

const aClasses = "px-4 font-sans text-gray-500 hover:text-gray-400";

const Landscape = (props) => {
    const linksComponents = props.links.map(link => (
        <NavLink
          exact
          key={`link_land_${link.title}`} 
          activeClassName={classes["active"]} 
          to={link.path} 
          className={aClasses}> {link.title} </NavLink>
    ));

    return (
        <div className="Section flex w-full h-screen min-h-0 overflow-y-hidden overflow-x-auto">
            <div className="w-96 h-screen sticky left-0">
              <img
                className="w-full h-full object-right object-cover" 
                alt="banner" src={props.banner} />
            </div> 
            <div className="flex-rigid min-w-section h-full overflow-y-auto">
                <nav style={{backgroundColor: "#e8e8e7dd"}} className="main-nav flex justify-end p-4 sticky top-0">
                    {linksComponents}
                </nav>
                {props.children}
            </div>
        </div>
    );
}

export default Landscape;