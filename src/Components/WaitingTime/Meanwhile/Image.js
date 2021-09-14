import React, { useState } from "react";
import playButton from "../../../assets/images/Video/playbutton.png";

function Image({ img, alt, position }) {
  const [isImageHover, setIsImageHover] = useState(false);

  return (
    <div
      className={`flex ${position} relative`}
      onMouseEnter={() => setIsImageHover(true)}
      onMouseLeave={() => setIsImageHover(false)}>
      <img
        src={img}
        alt={alt}
        className='w-9/12 md:w-full object-contain sm:w-10/12 md:w-full'
        loading={"lazy"}
      />
      {isImageHover && (
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center'>
          <img
            src={playButton}
            alt={"playButton"}
            className='w-4/12 md:w-5/12 object-contain'
            loading={"lazy"}
          />
        </div>
      )}
    </div>
  );
}

export default Image;
