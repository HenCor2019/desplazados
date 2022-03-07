import React, { useState } from "react";
import i18next from 'i18next';
import Tab from "./Tab";

import Section1 from "../sections/Section1";
import Section2 from "../sections/Section2";
import Section3 from "../sections/Section3";
import Section4 from "../sections/Section4";
import Section5 from "../sections/Section5";

function ReportagesTabs() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  function onClickHandler(name, index) {
    if (name === "Anterior" || name === "Previous") {
      if (index !== 0) {
        index--;
        setSelectedTab(tabs[index]);
      }
    } else if (name === "Siguiente" || name === "Next") {
      if (index !== tabs.length - 1) {
        index++;
        setSelectedTab(tabs[index]);
      }
    } else {
      setSelectedTab(tabs[index]);
    }
  }

  return (
    <>
      {/* <SelectedTab Section={selectedTab.section} /> */}
      <selectedTab.section />
      <ul className='grid grid-rows-1 grid-flow-col m-4'>
        <Tab
          name={i18next.language === 'en' ? 'Previous' : 'Anterior'}
          index={selectedTab.index}
          onClick={onClickHandler}
          selectedTab={selectedTab}
        />
        {tabs.map((tab) => (
          <Tab name={tab.name} index={tab.index} onClick={onClickHandler} selectedTab={selectedTab}/>
        ))}
        <Tab
          name={i18next.language === 'en' ? 'Next' : 'Siguiente'}
          index={selectedTab.index}
          onClick={onClickHandler}
          selectedTab={selectedTab}
        />
      </ul>
    </>
  );
}

const tabs = [
  {
    name: 1,
    section: Section1,
    index: 0,
  },
  {
    name: 2,
    section: Section2,
    index: 1,
  },
  {
    name: 3,
    section: Section3,
    index: 2,
  },
  {
    name: 4,
    section: Section4,
    index: 3,
  },
  {
    name: 5,
    section: Section5,
    index: 4,
  },
];

export default ReportagesTabs;
