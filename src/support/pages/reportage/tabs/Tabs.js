import React, { useState } from "react";
import Tab from "./Tab";

import Section1 from "../sections/Section1";
import Section2 from "../sections/Section2";
import Section3 from "../sections/Section3";
import Section4 from "../sections/Section4";
import Section5 from "../sections/Section5";

function ReportagesTabs() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  function onClickHandler(name, index) {
    if (name == "Anterior") {
      if (index != 0) {
        index--;
        setSelectedTab(tabs[index]);
      }
    } else if (name == "Siguiente") {
      if (index != tabs.length - 1) {
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
          name='Anterior'
          index={selectedTab.index}
          onClick={onClickHandler}
        />
        {tabs.map((tab) => (
          <Tab name={tab.name} index={tab.index} onClick={onClickHandler} />
        ))}
        <Tab
          name='Siguiente'
          index={selectedTab.index}
          onClick={onClickHandler}
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
