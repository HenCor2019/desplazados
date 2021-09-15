import React, { useState } from 'react';
import Landscape from './Lanscape/Landscape'
import Portrait from './Portrait/Portrait'
import { useConfigContext } from "../../../contexts/ConfigContext";

const Concepts = () => {
    const { isMobile } = useConfigContext();
    let content = null;
    
    if(isMobile) {
        content = (<Portrait />)
    } 
    else {
        content = (<Landscape />)
    }

    return (
        <main className="p-4">
            { content }
        </main>
    )
}

export default Concepts
