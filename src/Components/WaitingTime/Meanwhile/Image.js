import React from "react";
import playButton from "../../../assets/images/Video/playbutton.png";

const Image = ({ img, alt, position, onMouseEnter, onMouseLeave, hover }) => (
  <div
    className={`px-4 flex ${position} relative`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}>
    <img
      src={img}
      alt={alt}
      className='w-9/12 sm:w-10/12 md:w-full lg:w-80 object-contain w-full'
      loading={"lazy"}
    />
    {hover && (
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

export default Image;
