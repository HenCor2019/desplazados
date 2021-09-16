import React from 'react';

import { Link, useHistory } from 'react-router-dom';
import Hoverable from '../../wrappers/Hoverable/Hoverable';

const House = ({ houseImg, textImg, alt, line, filter, onMouseEnter, onMouseLeave, isShown, flexes, pathname }) => {
    const { push } = useHistory();

    return (
        <div className={`w-full p-1 flex ${flexes} overflow-hidden`}>
            <Hoverable
                className="inline-block relative w-1/3 min-w-house-width cursor-pointer"
                onHoverIn={onMouseEnter}
                onHoverOut={onMouseLeave}
                onClick={ () => { push(pathname) } }>
                <img
                    src={houseImg}
                    alt={alt}
                    className="w-full max-w-xs object-contain"
                    style={{ filter: filter }}
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
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain w-full"
                        loading="lazy"
                    />
                )}
            </Hoverable>
        </div>
    );
}

export default House;

