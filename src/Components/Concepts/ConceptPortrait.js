import React, { useState } from 'react';

const ConceptPortrait = ({ concept }) => {
    const [isActive, setActive] = useState(false);

    let textStyle = "font-crayon py-4 px-4 ease-in-out w-auto hover:bg-brownie-gray cursor-pointer";

    const handleOnClick = () => {
        setActive(!isActive);
    }

    if(isActive) {
        textStyle += " bg-brownie-gray";
    }

    return (
        <div>
            <p className={textStyle} onClick = {handleOnClick}>{concept.alt}</p>
            { isActive && <img src={concept.src} alt={concept.alt} className="mb-6"></img> }
        </div>
        
    );
}

export default ConceptPortrait