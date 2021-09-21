import React from "react";

function Tab({ name, index, onClick }) {
  return (
    <li
      className='flex justify-center items-center font-acumin'
      onClick={() => onClick(name, index)}>
      {name}
    </li>
  );
}

export default Tab;
