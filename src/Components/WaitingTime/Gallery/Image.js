import React, { useState } from 'react'

function Image({ img, alt, position, onClick, isMobile }) {
  const [isImageHover, setIsImageHover] = useState(false)

  const source = isMobile ? img.src : img.thumbnail

  return (
    <div
      className={`p-6 flex justify-center items-center ${position} relative order-5`}
      onMouseEnter={() => setIsImageHover(true)}
      onMouseLeave={() => setIsImageHover(false)}
      onClick={() => onClick(img)}
    >
      <img
        src={source}
        alt={alt}
        className="object-contain min-w-0 min-h-0 p-4 sm:p-2 cursor-pointer"
        loading={'lazy'}
      />
    </div>
  )
}

export default Image
