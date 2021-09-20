import React from "react";

function Subtitle({ name, color, customizeStyle }) {
  return (
    <div className='w-full rounded-lg relative flex flex-col items-center'>
      <h2
        style={{ backgroundColor: color }}
        className={`bg-blue-500  p-2  self-stretch sm:p-4 mt-10 mb-5 text-center rounded-lg text-white z-10 ${customizeStyle}`}>
        {name}
      </h2>
    </div>
  );
}

export default Subtitle;
