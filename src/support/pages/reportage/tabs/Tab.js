import React from "react";

function Tab({ name, index, onClick, selectedTab }) {
  const setStyles = () => {
    let styles = '';
    if(selectedTab.name === name ) {
      styles = 'flex justify-center items-center font-acumin cursor-pointer bg-brownie-gray hover:bg-brownie-gray-700 py-2';
    } else {
      styles = 'flex justify-center items-center font-acumin cursor-pointer hover:bg-brownie-gray-700 py-2'
    }

    return styles;
  }
  return (
    <li
      className={setStyles()}
      onClick={() => onClick(name, index)}>
      {name}
    </li>
  );
}

export default Tab;
