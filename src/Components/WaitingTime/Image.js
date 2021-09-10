import React from 'react';

const Image = ({ img, alt, grayscale, position, onMouseEnter, onMouseLeave, handleOnClick }) => (
    <div className={`px-4 flex ${position}`}>
        <img
            src={img}
            alt={alt}
            style={grayscale}
            className="w-9/12 sm:w-10/12 md:w-full lg:w-80 animate-flip"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={handleOnClick}
            loading={"lazy"}
        />
    </div>
);

export default Image;