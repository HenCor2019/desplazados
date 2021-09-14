import React, { useState } from 'react'
import playButton from '../../../assets/images/Video/playbutton.png'

function Image({ img, alt, position, video, handleOnClick }) {
  const [isImageHover, setIsImageHover] = useState(false)

  return (
    <div
      className={`px-4 flex ${position} relative`}
      onMouseEnter={() => setIsImageHover(true)}
      onMouseLeave={() => setIsImageHover(false)}
    >
      <img
        src={img}
        alt={alt}
        className="cursor-pointer w-9/12 sm:w-10/12 md:w-full lg:w-80 object-contain w-full"
        onClick={() => handleOnClick(video)}
        loading={'lazy'}
      />
      {isImageHover && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
          <img
            src={playButton}
            alt={'playButton'}
            className="cursor-pointer w-4/12 md:w-5/12 object-contain"
            loading={'lazy'}
            onClick={() => handleOnClick(video)}
          />
        </div>
      )}
    </div>
  )
}

export default Image
