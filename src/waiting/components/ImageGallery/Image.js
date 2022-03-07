import React, { useState } from 'react';

function Image({
  img, alt, position, onClick, isMobile,
}) {
  const [, setIsImageHover] = useState(false);

  const source = isMobile ? img.src : img.thumbnail;

  return (
    <div
      className={`p-6 md:p-4 lg:p-0 flex justify-center items-center ${position} relative order-5`}
      onMouseEnter={() => setIsImageHover(true)}
      onMouseLeave={() => setIsImageHover(false)}
      onClick={() => onClick(img)}
    >
      <img
        src={source}
        alt={alt}
        className="object-contain transform transition-transform md:scale-100 md:hover:scale-110 p-4 sm:p-2 md:p-0 md:h-full md:w-full cursor-pointer"
        loading="lazy"
      />
    </div>
  );
}

export default Image;
