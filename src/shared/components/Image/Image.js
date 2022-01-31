import React from 'react';
import Hoverable from '../Hoverable/Hoverable'

const Image = ({ img, alt, grayscale, position, onMouseEnter, onMouseLeave, handleOnClick }) => (
    <Hoverable 
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
    </Hoverable>
);

export default Image;