import React from 'react'

import Arrow from '../../../assets/images/WaitingTime/infographic/arrow.png'

function Tab({ name, color, customizeStyle, onClick, src }) {
  return (
    <div className="w-full rounded-lg relative flex flex-col items-center">
      <h2
        style={{ backgroundColor: color }}
        className={`bg-blue-500  p-2  self-stretch sm:p-4 mt-10 mb-4 text-center rounded-lg text-white z-10 ${customizeStyle}`}
      >
        {name}
      </h2>
      <div className="absolute transform bottom-0 translate-y-1/4 2xl:translate-y-2/4 flex justify-center items-center w-8 lg:w-10 2xl:w-10">
          <img src={Arrow} className="object-contain w-full" alt="flecha"></img>
      </div>
    </div>
  )
}

export default Tab
