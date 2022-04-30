import React from 'react';
import i18next from 'i18next';

import { NavLink } from 'react-router-dom';
import TranslateButtons from 'shared/components/TranslateButtons/TranslateButtons';
import classes from './Landscape.module.scss';

const aClasses = 'px-4 font-sans text-gray-500 hover:text-gray-200 text-base';

function Landscape(props) {
  const paddindWrapper = i18next.language === 'en' ? '' : 'pt-3'

  const linksComponents = props.links.map((link) => (
    <NavLink
      key={`link_land_${link.title}`}
      activeClassName={classes.active}
      to={link.path}
      className={aClasses}
    >
      {' '}
      {link.title}
      {' '}
    </NavLink>
  ));

  return (
    <div className="Section flex w-full h-screen min-h-0 overflow-y-hidden overflow-x-auto">
      <div className="w-auto h-screen sticky left-0">
        <img
          className="h-full object-right object-cover"
          alt="banner"
          src={props.banner}
        />
      </div>
      <div className="flex flex-col gap-2 flex-rigid max-h-section h-full overflow-y-scroll">
        {/* <nav style={{backgroundColor: "#e8e8e7dd"}} className="main-nav flex justify-end p-4 sticky top-0 z-50"> */}
        <nav
          style={{ backgroundColor: '#e8e8e7e6' }}
          className="main-nav max-w-nav overflow-hidden flex justify-end p-2 pb-7 sticky top-0 z-20"
        >
          {linksComponents}
          <div className={`flex justify-center items-center ${paddindWrapper}`}>
            <TranslateButtons type="navbar-landscape" />
          </div>
        </nav>
        {props.children}
      </div>
    </div>
  );
}

export default Landscape;
