import React from 'react'

import Arrow from '../../../assets/images/WaitingTime/infographic/arrow.png'

function Image({ src, alt }) {
  return (
    <div className="relative">
        <div className="w-full">
            <img src={src} alt={alt}></img>
        </div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -top-4 w-6 sm:2-8 2xl:w-10">
          <img src={Arrow} className="object-contain w-full" alt="flecha"></img>
      </div>
    </div>
  )
}

export default Image

// transform bottom-0 translate-y-1/4 2xl:translate-y-2/4 flex justify-center items-center w-8 lg:w-10 2xl:w-10