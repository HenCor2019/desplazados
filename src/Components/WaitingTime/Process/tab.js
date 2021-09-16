import React from "react";

function Tab({ name, color, customizeStyle, onClick, src }) {
  return (
    <li
      style={{ backgroundColor: color }}
      className={`hover:opacity-50 flex justify-center items-center text-center bg-red-500 m-0 p-2 w-auto text-xs 2xl:text-base font-acumin font-medium text-white cursor-pointer ${customizeStyle}`}
      onClick={() => onClick(src)}>
      {name}
    </li>
  );
}

export default Tab;
