import React from 'react';

const Image = ({ img, alt, grayscale, position, onMouseEnter, onMouseLeave, handleOnClick }) => (
    <div 
        onHoverIn={onMouseEnter}
        onHoverOut={onMouseLeave}
        onClick={handleOnClick}
        className={`px-4 flex ${position}`}>
        <img
            src={img}
            alt={alt}
            style={grayscale}
            className="w-9/12 sm:w-10/12 md:w-full lg:w-80"
            loading={"lazy"}
        />
    </div>
);

export default Image;