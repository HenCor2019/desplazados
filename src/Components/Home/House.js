import React from 'react';

import { Link } from 'react-router-dom';

const House = ({ houseImg, textImg, alt, line, filter, onMouseEnter, onMouseLeave, isShown, flexes, pathname }) => (
    <div className={`w-full p-1 flex ${flexes} overflow-hidden`}>
        <Link
          to={pathname} 
          className="inline-block relative w-1/3 min-w-house-width">
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
        </Link>
    </div>
);

export default House;

