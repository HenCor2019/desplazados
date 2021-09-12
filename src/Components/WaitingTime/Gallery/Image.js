import React, { useState } from "react";

function Image({ img, alt, position, onClick }) {
  const [isImageHover, setIsImageHover] = useState(false);

  return (
    <div
      className={`px-4 flex justify-center items-center ${position} relative order-5`}
      onMouseEnter={() => setIsImageHover(true)}
      onMouseLeave={() => setIsImageHover(false)}
      onClick = {() => onClick(img)}>
      <img
        src={img.src}
        alt={alt}
        className='w-9/12 sm:w-10/12 md:w-full lg:w-80 object-contain w-full rounded-2xl'
        loading={"lazy"}
      />
    </div>
  );
}

export default Image;