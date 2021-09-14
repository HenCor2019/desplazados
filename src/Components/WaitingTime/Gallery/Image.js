import React, { useState } from "react";

function Image({ img, alt, position, onClick }) {
  const [isImageHover, setIsImageHover] = useState(false);

  return (
    <div
      className={`flex justify-center items-center ${position} relative order-5`}
      onMouseEnter={() => setIsImageHover(true)}
      onMouseLeave={() => setIsImageHover(false)}
      onClick = {() => onClick(img)}>
      <img
        src={img.thumbnail}
        alt={alt}
        className='object-contain min-w-0 min-h-0'
        loading={"lazy"}
      />
    </div>
  );
}

export default Image;