import React from 'react';

const ImageWihText = ({ img, alt, position, text }) => (
    <div className={`px-4 flex ${position} relative`}>
        <img
            src={img}
            alt={alt}
            className="w-9/12 sm:w-10/12 md:w-full lg:w-80 object-contain w-full"
            loading={"lazy"}
        />
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-sans text-2xl text-center md:text-base">
            {text}
        </p>
    </div>
);

export default ImageWihText;