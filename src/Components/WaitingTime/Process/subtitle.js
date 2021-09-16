import React from "react";

function Tab({ name, color, customizeStyle, onClick, src }) {
  return (
    <h2
    style={{ backgroundColor: color }} 
    className={`bg-blue-500 p-2 sm:p-4 m-4 w-full text-center rounded-lg xl:hidden text-white ${customizeStyle}`}>
        {name}
    </h2>
  );
}

export default Tab;
