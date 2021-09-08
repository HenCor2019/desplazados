import React from 'react';

const House = ({ houseImg, textImg, alt, line, filter, onMouseEnter, onMouseLeave, isShown, flexes }) => (
    <div className={`w-full p-1 flex ${flexes} overflow-hidden`}>
        <div className="relative w-1/3 min-w-house-width">
            <img
                src={houseImg}
                alt={alt}
                className="w-full max-w-xs object-contain animate-flip"
                style={{ filter: filter }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                loading="lazy"
            />
            <img
                src={line}
                alt="line"
                className="w-full"
                loading="lazy"
            />
            {isShown && (
                <img
                    src={textImg}
                    alt={alt}
                    className="absolute bottom-0 object-contain w-full"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    loading="lazy"
                />
            )}
        </div>
    </div>
);

export default House;

