import react from "react";
import { useState } from "react";

const Concept = ({ concept, onClick }) => {
    const pStyle = "font-crayon py-2 px-4 ease-in-out hover:bg-brownie-gray cursor-pointer";

    return (
        <li className={pStyle} onClick = {() => onClick(concept)}>{concept.alt}</li>
    );
}

export default Concept